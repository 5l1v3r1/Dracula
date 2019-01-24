# Dracula
![icon|10x10,100%](icon.png)


Cross platform desktop application to encrypt and decrypt your files</br>
"Dance like nobody is watching, encrypt like everyone is."~Unknown

## General informations :
Dracula is an opensource project by **KRYPT0N** (me) that consits of a crossplatform desktop application created with nodejs and electron using the web technologies, this application provides you an easy way to encrypt your files with an "encryption key" AKA **passcode**, it uses a super strong encryption algorithm known as **AES256** which is concidered mathematically **impossible** to decrypt (obtain the original file) without the presence of the "encryption key". After encrypting your file, you will realize a new file has been created with a .dnc file extension (Dracula eNCrypted File). Then if you want to reaccess to your original file, you will need to decrypt this **.dnc** file using Dracula.

## How to use :
Lets imagine that you have a secret picture of Elon musk smoking pot! So you wish to encrypt it so only you and the key holders are able to see it. I will issume that you already installed **dracula**, first you have to fire up dracula.exe (or the desktop shortcut), then the application will show up as bellow.

![mainScreen|200x](tuto/mainScreen.png)

The main window gives you the choice to whether you want to encrypt a file or to decrypt an encrypted file, In out scenario we will choose to encrypt by clicking of the **Encrypt** button.

![fileDialog|200x](tuto/fileDialog.PNG)

A file dialog will appear as shown above, now you need to select the image to perferm the action on, then click Select.

![screenshot|200x](tuto/encryptForm.PNG)

Now a new window will popup, it indicates that you are willing to encrypt a file, it asks for a passcode AKA the encryption key and to rewrite it again to be sure that you set it right. Dracula also gives you the choice to generate a strong passcode randomly but you have to make sure you write it down on a piece of paper or to memorise it (pretty hard :3). Then submit **Encrypt**. A loading screen will appear then it will print a toast that indicates if the operation has been successfully done or an error occured.

![screenshot|200x](tuto/fileExplorer.PNG)
Going back to file explorer, you will notice a new file created under the name of your orginial file concanted with a .dnc file extension.

##Horray! now you have your encrypted file that is impossible to read without your passcode!
![meme|200x](tuto/brba.jpg)
