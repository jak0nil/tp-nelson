# Application web d'articles

Pour lancer cette application lancer la commande suivante dans un terminal

```shell script
json-server server.json
```

Puis dans un autre, lancez (éventuellement)
```shell script
npm install
```
Et enfin
```shell script
npm start
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Migration Angular 5 -> 8

Voici les commandes que j'ai lancées pour migrer ce projet d'Angular 5 à Angular 8

```shell script
update @angular/cli@6
ng update @angular/core@6
npm install -g rxjs-tslint
rxjs-5-to-6-migrate -p src/tsconfig.app.json
ng update @angular/cli@7 @angular/core@7
ng update @angular/cli --migrate-only --from=1.7.0 # cette commande a permis de générer le fichier angular.json
ng update @angular/cli@8 @angular/core@8
npm install
```

## Migration Angular 8 -> 9

Voici les commandes que j'ai lancées pour migrer ce projet d'Angular 8 à 9

```shell script
ng update @angular/core@8 @angular/cli@8
ng update @angular/core @angular/cli
npm install
```
