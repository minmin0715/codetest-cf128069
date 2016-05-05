 function getTenSubstrFriendly(input) {
     var arr = [];
     var str = input.split("");
     if (str.length >= 2 && str[0] == '"' && str[str.length - 1] == '"') {
         var strInput = input.replace(/"/g, "");
         if (isTenSubstringFriendly(strInput.split(""))) {
             arr.push(parseInt(strInput));
         }
     }
     for (var i = 1; i <= input; i++) {
         var inputArr = i.toString().split("");
         if (isTenSubstringFriendly(inputArr)) {
             arr.push(i);
         }
     }
     return arr;
 }

 function isTenSubstringFriendly(arr) {
     var len = arr.length;
     for (var i = 0; i < len; i++) {
         if (arr[i] < '0' || arr[i] > '9') {
             return false;
         }
         var sum = 0;
         var j;
         for (j = i; j < len; j++) {
             sum += arr[j] - '0';
             if (sum > 10) return false;
             else if (sum == 10) break;
         }
         if (j == len - 1) {
             if (sum == 10) break;
             else return false;
         }
         if (j == len) return false;
     }
     return true;
 }

