# decoder-ring
Thinkful first capstone project: Decoder ring

Decoder ring where you can use caesar shift, polybius square, or substitution cipher to enconde or decode words. 

## Caesar Shift

![Example of caesar shift](https://github.com/matthewpicot/decoder-ring/assets/125609610/12afd48a-e6a2-45d8-a003-bfdf6ef2745c)


The Caesar shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter A would become D.

When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

## Polybius Square

![Example of polybius square](https://github.com/matthewpicot/decoder-ring/assets/125609610/13a18fe4-371f-4f91-8240-8c3ec37ba8f5)


The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter B would be represented by the numerical pair 21.

Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.

"thinkful" -> "4432423352125413"

When decoding the message, each pair of numbers is translated using the coordinates.

## Substitution Cipher

![Example of substitution cipher](https://github.com/matthewpicot/decoder-ring/assets/125609610/80dc5dd7-992b-46ce-a7c0-7c9920053d08)


The substitution cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the substitution alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

For example, in the image above, the word HELLO would be translated as follows:

    H becomes R.
    E becomes M.
    L becomes W.
    O becomes L.

This would result in the code RMWWL. To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.
