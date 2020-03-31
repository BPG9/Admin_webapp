### Museum Admin Webappp

 ## Wegen CORS muss Frontend mit dem selben Domain wie Backend sein. in diesem Fall 47-244.gugw.tu-darmstadt.de


# Installation

auf Windows: 

nodejs und npm sollen heruntergeladen werden und installiert werden. 
Link für Nodejs https://nodejs.org

> How To Install And Setup A React App On Windows 10 (NUR Schritt 1)
https://www.techomoro.com/how-to-install-and-setup-a-react-app-on-windows-10/

> für installation aud Ubuntu/Debian 

Node :  
```
sudo apt install nodejs   
```



NPM:    
```
sudo apt install npm
```


PM2:   
```
npm install pm2 -g
```


requiremnet für React: 
```
 npm install
```


> Start
für start Development: 
```
npm start
```
für Build Production:
```
npm run build   
```


> nginx configuration
 react funktioniert bei Development auf Port 8081 deshalb muss nginx Konfiguration reverce Proxy auf 8081 gemacht werden. ein Beispel dafür: 

server {
    server_name 47-244.gugw.tu-darmstadt.de;
    listen 80;

location / {
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
        proxy_pass http://localhost:8081;
        client_max_body_size 10M;
    }
}


Beispiel für Production: 
server {
    server_name 47-244.gugw.tu-darmstadt.de;
    root /Path/to/Build/files;
    index index.html;

location / {
  try_files $uri /index.html;
}
}

# Admin page ENG:

Code has 4 pages and is under construction. 

1. page is tour and tour editing. (Code is written and if APIs are ok, everything works)
2. page is Exhibits and Exhibit Creation or Editing. All functions except photo upload are there.
3. page is Admin Page which is for create user, password change, Promote and user delete and .... All functions are built in. 
4. page is Statistics. Demo only

______
# Admin page DE:

Der Code hat 4 Seiten und befindet sich im Aufbau. 

1. Seite ist die Tour und die Tourbearbeitung. (Der Code ist geschrieben und wenn die APIs in Ordnung sind, funktioniert alles)
2. Seite ist Exponate und Exponat-Erstellung oder -Redaktion. Alle Funktionen außer Foto-Upload sind vorhanden.
3. Seite ist die Admin-Seite, die zum Anlegen von Benutzern, Ändern von Passwörtern, Befördern und Löschen von Benutzern dient und .... Alle Funktionen sind eingebaut. 
4. Seite ist die Statistik. Nur Demo

Übersetzt mit www.DeepL.com/Translator (kostenlose Version)