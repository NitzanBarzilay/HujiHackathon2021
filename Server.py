#!/usr/bin/env python3

# import socket
#
# HOST = '127.0.0.1'  # Standard loopback interface address (localhost)
# PORT = 65433    # Port to listen on (non-privileged ports are > 1023)
#
# print("yay server")
# with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
#     s.bind((HOST, PORT))
#     s.listen()
#     conn, addr = s.accept()
#     with conn:
#         print('Connected by', addr)
#         while True:
#             data = conn.recv(1024)
#             if data:
#                 print("got:",data)
#             conn.sendall(data)

# from flask import Flask, json
# api = Flask(__name__)
#
# companies = [{"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"}]
#
# @api.route('/companies', methods=['GET'])
# def get_companies():
#   return json.dumps(companies)
#
# if __name__ == '__main__':
#     api.run()

# server.py

from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def get_tasks():
    name = request.args.get("name")
    num = request.args.get("num")

    return num

if __name__ == '__main__':
    app.run(debug=True, port=8080)
