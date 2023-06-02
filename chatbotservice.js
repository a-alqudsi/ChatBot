const responseObj = {
    hello: "Hey ! How are you doing ?",
    hey: "Hey! What's Up",
    today: new Date().toDateString(),
    date: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
  };

const fetchResponse = (userInput) => {
    return new Promise((res, reject) => {
        try{
            setTimeout(() => {
          res(responseObj[userInput]);
        }, 1500);
        } catch(error) {
          reject(error)
        }
    });
};
const chatBotService={
    getBotResponse(userInput){
        return fetchResponse(userInput);
    },
  };
  export default chatBotService;