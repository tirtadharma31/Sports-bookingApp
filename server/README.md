## ORM Sequelize script

### Table Court
```bash
npx sequelize-cli model:generate --name Court --attributes "courtName:string, type:string, image:string, price:integer"
```

### Table Member
```bash
npx sequelize-cli model:generate --name Member --attributes "name:string, phone:integer, profilImage:string, userName:string, password:string"
```

### Table Booking
```bash
npx sequelize-cli model:generate --name Booking --attributes "dateSchedule:date, startTime:time, finishTime:time, usageTotal:integer, payTotal:integer, idMember:integer, idCourt:integer"
```