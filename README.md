# hash-gen-web

## Run
1. `pip install -r requirements.txt`
2. `python server.py`
3. Access http://localhost:8888

## Build
1. `docker build -t hash-gen-web .`
2. `docker run -p 80:8888 hash-gen-web`
3. Access http://localhost

## Write Javascript
1. Edit `src/main.js`
2. `npm install`
3. `$(npm bin)/browserify src/main.js -o html/js/bundle.js`
