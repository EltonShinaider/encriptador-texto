# Challenge Alura One - Decodificador de texto

Esse projeto foi construído para atender ao challenge do curso Praticando Lógica de Programação: Challenge Decodificador de Texto dentro do programa One da Alura e Oracle.
A página deve ter campos para inserção do texto a ser criptografado ou descriptografado e a pessoa usuária deve poder escolher entre as duas opções.
O resultado deve ser exibido na tela.

# Funcionalidades 

- Encriptografar um texto que contenha apenas letras minúsculas e sem acentos;
- Descriptografar um texto criptografado.


# As "chaves" de criptografia que foram utilizadas:
- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"

## Por exemplo
```
"gato" => "gaitober"
gaitober" => "gato"
```

# Requisitos:
- Deve funcionar apenas com letras minúsculas;
- Não devem ser utilizados letras com acentos nem caracteres especiais;
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

# Extras:
- Um botão que copie o texto criptografado/descriptografado para a área de transferência, ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos;
- Um rodapé com os dados da pessoa que desenvolveu o site.

# Estrutura e stack utilizada

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 


**Estrutura do projeto:**

```shell
$ encriptador-texto/
├── assets/
│   └── advertencia.png
│   └── boneco.png
│   └── logo alura.png
├── styles/
│   └── style.css
├── .gitignore
├── index.html
├── README.MD
└── script.js
```

[Preview](https://encriptador-texto-es.vercel.app/)

### Tela inicial:
![image](https://github.com/user-attachments/assets/57fef35a-79d5-4b43-988b-4a845da124d1)

### Tela de texto criptografado:
![image](https://github.com/user-attachments/assets/1a1f116e-2bfc-4129-b193-f819708b2978)

### Tela de texto descriptografado:
![image](https://github.com/user-attachments/assets/3b836454-68f3-47bb-b906-26c221b90611)

### Mensagem de texto copiado:
![image](https://github.com/user-attachments/assets/debc3bee-0d8b-4bae-b0d1-5b83bbb9dfce)

### Mensagem de alerta para uso de caracteres incorretos:
![image](https://github.com/user-attachments/assets/e896b1d8-c6bb-49b1-bc3e-7ea44a1c86bf)
