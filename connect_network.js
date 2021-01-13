document.getElementById('username').value='171002315';
document.getElementById('password').value='XXX';
var inputs =  document.getElementsByTagName('input');
for (var i =0;i<inputs.length;i++) {
        if  (inputs[i].value == "连接网络")
            inputs[i].click()
    }