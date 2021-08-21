const mainDedline = '2021-08-23';

const timer = (dedline) => {

    // функция для вычисления количества оставшегося времени (мин., сек., час, ...)
    const getTimeRemaining = (endTime) => {
        const t = Date.parse(endTime) - Date.parse(new Date());
        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            total: t,
            days,
            hours,
            minutes,
            seconds
        };
    };

    // функция для размещения данных времени в нужные элементы
    const setClock = (endTime) => {
        const days = document.querySelector('#days');
        const hours = document.querySelector('#hours');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');

        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const time = getTimeRemaining(endTime);

            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            // удаляем setInterval после оконцания времени и выставляем все данные в "00"
            if (time.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
        
                clearInterval(timeInterval);
            }
        }

        // функция для добавленя нуля перед цифрой если она меньше 9
        function addZero(num) {
            if (num < 9) {
                return `0${num}`
            }
            return num;
        }
    };

    setClock(dedline);

};

timer(mainDedline);