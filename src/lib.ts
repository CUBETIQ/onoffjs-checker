import resolver from './resolver'

class ConnectionChecker
{
    public checker()
    {   
        resolver()
        // require('dns').resolve('www.google.com', function(err) {
        //     if (err) {
        //        console.log("No connection");
        //     } else {
        //        console.log("Connected");
        //     }
        // });
    }
    // public checker() {
    //     var xhr = new XMLHttpRequest();
    //     var file = "https://via.placeholder.com/1.png"
    //     var randNum = Math.round(Math.random() * 1000 - 1);

    //     xhr.open('HEAD', file + "?rand=" + randNum, true);
    //     xhr.send();

    //     xhr.addEventListener("readystatechange", processRequest, false);

    //     function processRequest(e) {
    //         if (xhr.readyState == 4) {
    //             if (xhr.status >= 200 && xhr.status < 304) {
    //                 console.log("Connected");
    //                 return true;
    //             } else {
    //                 console.log("Not Connection");
    //                 return false;
    //             }
    //         }
    //     }
    // }

    // public checker()
    // {
    //     var i = new Image();
    //     i.onload = () => {
    //         console.log("Connection is active");
    //     }
    //     i.onerror = () => {
    //         console.log("Connection is die");
    //     }
    // }

    // public checker()
    // {
    //     axios.get("https://via.placeholder.com/1.png")
    //         .then((resp) => {
    //             console.log("Connected")
    //             return true;
    //         })
    //         .catch((error) => {
    //             console.log("No Connection");
    //             return false;
    //         });
    // }

    private doOnline(url)
    {

    }

    public doOffline(url)
    {

    }
}


export { ConnectionChecker };