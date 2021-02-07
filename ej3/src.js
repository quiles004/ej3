db.ej3.insertMany([
    {
        id:'1',
        tipo:'camara sony',
        precio:130, 
        unidades_vendidas:23,
        fecha_venta:new Date('2020-7-12'),
        cliente:'worten'
    },
    {
        id:'2',
        tipo:'camara samsung',
        precio:130,
        unidades_vendidas:23,
        fecha_venta:new Date('2020-3-17'), 
        cliente:'worten'
    },
    {
        id:'3',
        tipo:'camara samsung',
        precio:112,
        unidades_vendidas:30,
        fecha_venta:new Date('2020-10-4'),
        cliente:'juan electronica'
    },
    {
        id:'4',
        tipo:'camara lg',
        precio:112, 
        unidades_vendidas:23,
        fecha_venta:new Date('2020-8-9'),
        cliente:'mediamark'
    },
    {
        id:'5',
        tipo:'camara xiaomi',
        precio:130,
        unidades_vendidas:30,
        fecha_venta:new Date('2020-6-22'),
        cliente:'mediamark'
    },
    {
        id:'6',
        tipo:'camara apple',
        precio:112,
        unidades_vendidas:23,
        fecha_venta:new Date('2020-1-13'),
        cliente:'worten'
    },
    {
        id:'7',
        tipo:'camara lg',
        precio:112,
        unidades_vendidas:30,
        fecha_venta:new Date('2020-12-1'),
        cliente:'juan electronica'
    },
    {
        id:'8',
        tipo:'camara xiaomi',
        precio:130, 
        unidades_vendidas:30,
        fecha_venta: new Date('2020-2-4'),
        cliente:'media mark'
    }])
    
    db.ej3.aggregate(
        [
          {$match:{tipo:'camara lg'}},
            {$group:
              {
                _id: { precio: { precio: "$precio"}, unidades_vendidas: { unidades: "$unidades_vendidas" } },
                ganancias_totales: { $sum:{$multiply: [ "$unidades_vendidas",'$precio'] } }
             }},
             {
                $project: {
                    _id: 0,
                    totalv: "$ganancias_totales",
                    IVA: { $multiply: ["$ganancias_totales", 0.21] },
                    totalvIVA: { $multiply: ["$ganancias_totales", 1.21] }
                }},
                {$match:{ $expr: { $gt: [ "$IVA" , 550 ] }}}
          
        ]
     ).pretty()
   