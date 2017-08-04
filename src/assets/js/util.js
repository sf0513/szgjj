// 输入内容不能为空
export function checkNull(value) {
    let reg =  /^\s*$/g;

    if (!reg.test(value)) {
        return false;
    }
    return true;
}