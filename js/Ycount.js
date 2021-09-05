window.onload = function() {
    var follower = document.getElementsByClassName('counter')[0];
    var i = 0;
    var count = setInterval(function() {
        i++;
        follower.innerText = i;

        if (follower.innerText == 500) {
            clearInterval(count);
        }
    }, 50);
    var follower1 = document.getElementsByClassName('counter')[1];
    var j = 0;
    var count1 = setInterval(function() {
        j++;
        follower1.innerText = j;

        if (follower1.innerText == 43) {
            clearInterval(count1);
        }
    }, 100);
    var follower2 = document.getElementsByClassName('counter')[2];
    var k = 0;
    var count2 = setInterval(function() {
        k++;
        follower2.innerText = k;

        if (follower2.innerText == 15) {
            clearInterval(count2);
        }
    }, 150);
    var follower3 = document.getElementsByClassName('counter')[3];
    var l = 0;
    var count3 = setInterval(function() {
        l++;
        follower3.innerText = l;

        if (follower3.innerText == 9) {
            clearInterval(count3);
        }
    }, 200);
}