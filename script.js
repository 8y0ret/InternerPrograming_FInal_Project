const proxy = 'https://busan-show.herokuapp.com/';
            const apiKey = '%2BMwoImVBufryP3wsc0KZ6Qbfvzvh9Nqx%2F3ym3z36FjYfvZdZKF5U1t8JwWVA9yFisGJkExRr6%2BGuUIoXY71wMw%3D%3D';
            const resultType = 'json';


/* Javascript 샘플 코드 */


var xhr = new XMLHttpRequest();
const theaterUrl = proxy + 'http://apis.data.go.kr/6260000/BusanCulturePlayDetailService/getBusanCulturePlayDetail?serviceKey=' + apiKey + '&numOfRows=10&pageNo=1&resultType=' + resultType; /*URL*/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');