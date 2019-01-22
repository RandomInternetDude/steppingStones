/*

Setting up our Ubuntu Hyper-v virtual machine

1. Install hyper -v

2. Make sure that you save Ubuntu to a local disk partitioned with 75 gig (reccommended)
once completed you can run a ubuntu and it will go through a user set up prompt.

3. For computer name follow the convention of TRE-TPA-L003; the last number should
go by the next person. if the last person was L003 the next will be L004

4. For the user name follow the convention of first letter last name; example: jDoe

5. For the password follow the convention of Trell@nce1. 


*/

/*

Setting up our Pyton enviornment 

1. Open the terminal by right clicking anywhere on the linux interface

2. Run the command sudo apt update

3. Run the command sudo apt -y upgrade

4. Run the command sudo apt install -y python3-pip

5. Run the command python3 -V or python --version 

6. Install the venv tool by running the command: sudo apt install python3-venv

7. Create your python enviornment using the venv module by running the command: python3 -m venv env

8. Activate it using the command: source env/bin/activate ; You can now install packages in your env using pip!

9. Installing python 3.7

10. In the terminal run the following commands to update your system and upgrade your packages

$ sudo apt update  
$ sudo apt upgrade -y


11. Next, install the build tools and Python 3.7 dependencies using the following command:

$ sudo apt install build-essential libssl-dev zlib1g-dev libncurses5-dev libncursesw5-dev 
libreadline-dev libsqlite3-dev libgdbm-dev libdb5.3-dev libbz2-dev libexpat1-dev liblzma-dev tk-dev libffi-dev

12. Next, you need to download the source code of Python 3.7 using the wget tool:

$ wget https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tar.xz

13. Next, you need to decompress the tar file using:

$ tar xf Python-3.7.0.tar.xz

14. Next, navigate inside your decompressed Python-3.7.0 folder:

$ cd Python-3.7.0

15. Now, you need to build your Python 3.7 code using the configure and make tools:

$ ./configure --enable-optimizations
$ sudo make -j 8

16. Next, run the following command to install the Python 3.7:

$ sudo make altinstall

17. Finally install the alternatives with this command:  

$ sudo update-alternatives --install /usr/bin/python python /usr/local/bin/python3.7 3 

18. Then run python --version

You should see Python 3.7.0

I hope... :]
*/