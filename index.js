const quotes = document.getElementById("quotes");
      const author = document.getElementById("author");
      let realData = "";
      let quotesData = "";

      const tweetNow = () => {
        let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
        window.open(tweetPost);
      };

      const getNewQuotes = () => {
        let rnum = Math.floor(Math.random() * 10);
        // console.log(realData[rnum].text);
        // console.log(realData[rnum].author);
        quotesData = realData[rnum];
        quotes.innerHTML = `${quotesData.text}`;

        if (quotesData.author == null) {
          author.innerHTML = "Unknown";
        } else {
          author.innerHTML = `${quotesData.author}`;
        }
      };
      const getQuotes = async () => {
        const api = "https://type.fit/api/quotes";
        try {
          let data = await fetch(api);
          realData = await data.json();
          getNewQuotes();
          //   console.log(realData[0].text);
        } catch (error) {}
      };

      getQuotes();