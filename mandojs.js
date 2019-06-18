// function checkTWId(id){
//     let ret = false;
//     if(id.length ==10){
//         let c1 = id.substr(0, 1);
//         let letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
//         if(letters.indexOf(c1)>=0){

//         }

//     }
//     return ret;
// }

function checkTWId(id) {

    //身分證要驗證的條件
    let ret = false;
    let regex = /^[A-Z][12][0-9]{8}$/;//沒有家g的話只要達到目的就會離開,[]字元集合取任意一個部分
    let result = id.match(regex);
    if (result != null) {
        let letters = 'ABCDEFGJKLMNPRSTUVXYWZIO';
        let c12 = id.substr(0, 1);//拿出英文字母
        letters.indexOf(c12) + 10//加上10得到數值
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1, 1));
        let n4 = parseInt(id.substr(2, 1));
        let n5 = parseInt(id.substr(3, 1));
        let n6 = parseInt(id.substr(4, 1));
        let n7 = parseInt(id.substr(5, 1));
        let n8 = parseInt(id.substr(6, 1));
        let n9 = parseInt(id.substr(7, 1));
        let n10 = parseInt(id.substr(8, 1));
        let n11 = parseInt(id.substr(9, 1));
        let sum = n1 * 1 + n2 * 9 +
            n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;
        ret = sum % 10 == 0;
    }
    return ret;
}

function ceateAnswer(n = 3) {
    let poker = [];
    for (let i = 0; i < 10; i++) poker[i] = i;
    for (let i = poker.length - 1; i > 0; i--) {
        let rand = parseInt(Math.random() * (i + 1));
        [poker[i], poker[rand]] = [poker[rand], poker[i]];
    }
    let ret = '';
    for (let i = 0; i < n; i++) ret += poker[i];
    return ret;
}

function checkAB(ans, gus) {
    let a = 0; b = 0;
    for (let i = 0; i < gus.length; i++) {
        if (gus.charAt(i) == ans.charAt(i)) {
            a++;//gus中的第i碼 == ans是否等於ans的第i碼
        } else if (ans.indexOf(gus.charAt(i))>=0) {
            b++;//gus中的第i碼是否存在於ans終
        }
    }
    return a + 'A' + b + 'B';
}
