function sendEmail() {
    var generateTemplate = function (name) { return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Bem-vindx Sawabona Colab</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body> 
Parabéns, <b>${name}</b><br>
Sua inscrição está confirmada!<br>
Nosso encontro será dia 27/08 às 19h<br>
A transmissão será feita pelo Youtube<br>
Você já pode acessar o link https://youtu.be/i5FXoOrKeWM e ativar o lembrete.<br>
Te espero lá!<br>
<i>“Quando a mulher negra se movimenta, toda a estrutura da sociedade se movimenta com ela” – Angela Davis</i><br>
<b>Sawabona Colab</b><br>
</body>
</html>`} 
    var nome = $("#nome").val()
    var body = generateTemplate(nome)
    var email = document.getElementById('email')
    console.log(nome, body, email)
    Email.send({
        SecureToken: "aa140408-bd7a-431c-9d1d-2e5059a09410",
        To: email.value,
        From: "sawabonacolab@gmail.com",
        Subject: "Seja bem-vinda ao Sawabona Colab!",
        Body: body
    }).then(
        message => alert("Presenca garantida! Cheque seu e-mail =)")
    );
}