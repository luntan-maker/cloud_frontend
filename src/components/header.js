import { useState, useEffect } from 'react';
export default function Header() {
    
    useEffect(() => {
        var my_link = "*"

        fetch("https://ipinfo.io/json")
        .then(function (response) {
        return response.json();
        })
        .then(function (myJson) {

        fetch("https://uddkyyt448.execute-api.us-east-1.amazonaws.com/Prod/write?ip="+myJson.ip, {
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": my_link//"*"
        }
        })
        })
        .catch(function (error) {
        console.log("Error: " + error);
        });

        fetch("https://uddkyyt448.execute-api.us-east-1.amazonaws.com/Prod/read", {
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": my_link//"*"
        }
        })
        .then(function (response) {
            var d = response.json();
            return d//console.log(d)
        })
        .then(function (myJson) {
            var text = document.getElementsByClassName("counter")
            // setCount(text[0].textContent)
            text[0].textContent = "There have been " + myJson["UserCount"] + " users to this site!"
            return myJson["UserCount"]
        })
    });
    
    return (
        <div>
            <br></br>
            <span class="title">
                <div class="title">Lucas Orman</div>
                <div class="sub-title"> Porum, Ok 74455</div>
                <div class="sub-sub-title">
                    <span>lucas.orman@gmail.com </span><span class="dot"></span>
                    linkedin.com/in/lucas-orman
                </div>
                <div class="counter"></div>
            </span>
        </div>
    )
}