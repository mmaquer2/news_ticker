// sources for of APIs
    //-Api news (headlines)
    //alpha vantage (stocks)
    //espn (sports)
    //wolfram alpha api
    function test() {
        console.log('hello world')
        
        document.getElementById('output').innerHTML = "test test test"
    }

    const alpha_key = ('YIF9NU7FLVJWG46Q');
    const url = ('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=YIF9NU7FLVJWG46Q');
    async function test_data() {

        const response =await fetch(url);
        const data = await response.json();


        console.log(data)

    }


    const news_key = ('a0797ceb9fc0435c9e7e691760ad4244')
    const news_url = ('https://newsapi.org/v2/top-headlines?country=us&apiKey=a0797ceb9fc0435c9e7e691760ad4244')
    async function test_news_api () {

        const response = await fetch(news_url);
        const news_data = await response.json();

        console.log (news_data)
    }


  