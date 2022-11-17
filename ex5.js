// Tri par insertion
function tri(arr) {
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j = i - 1;
        console.log('i = ',i, '; tmp = ',tmp, '; j =',j,' ; arr_j = ',arr[j]);
        while (j >= 0 && arr[j] > tmp) {
            arr[j + 1] = arr[j];
            console.log('arr_'+(j+1)+' (1)', arr[j + 1]);
            j--;
        }
        arr[j + 1] = tmp;
        console.log('arr_' + (j + 1) +' (2)', arr[j + 1]);
    }
    return arr;
}

const monTableau = [7,3,1,8,12,2,5];
console.log(tri(monTableau));