import http.server
import socketserver
import webbrowser

PORTA = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    pass

with socketserver.TCPServer(("", PORTA), Handler) as servidor:
    print(f"Servidor rodando em: http://localhost:{PORTA}")
    webbrowser.open(f"http://localhost:{PORTA}")
    servidor.serve_forever()
