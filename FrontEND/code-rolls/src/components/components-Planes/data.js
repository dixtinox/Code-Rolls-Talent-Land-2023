const data = [
  {
    _id: 1,
    diet_name: "Dieta para Juan",
    diet_label: "Aumento de masa muscular",
    author: "Nutriologa María García",
    meals: [
      {
        label: "Desayuno",
        meal_time: "07:00",
        options: [
          {
            name: "Huevos revueltos con jamón",
            details: "Huevos (2, 100g), jamón (50g), sal y pimienta al gusto",
          },
          {
            name: "pancakes",
            details:
              " 50 gr, avena molida + 100 gr, claras de huevo + *stevia, polvo de hornear. Topping, 50 gr, fresas + 50 gr, plátano + 25 gr, crema de cacahuate natural + 20 ml miel maple sugar free",
          },
          {
            name: "Pan francés",
            details: " 2 pza, pan multigrano (Oroweat) + 100 gr, claras de huevo + *stevia, canela. opping, 50 gr, fresas + 50 gr, plátano + 25 gr, crema de cacahuate natural + 20 ml miel maple sugar free",
          },
        ],
      },
      {
        label: "Snack",
        meal_time: "10:00",
        options: [
          {
            name: "Bowl de yogurt",
            details: " 150 gr, yogurt griego 0% (Fage o Chobani) *endulzar con stevia + 130 gr, plátano picado + 100 gr, mezcla de moras + 10 gr, almendras. ",
          },
        ],
      },
      {
        label: "Comida fuerte",
        meal_time: "15:00",
        options: [
          {
            name: "Pollo con arroz",
            details: "230 gr, pechuga de pollo, 250 gr, arroz blanco cocido, 60 gr, aguacate , *vegetales al gusto",
          },
          {
            name: "Res con pasta",
            details:
              "185 gr, carne de res, 305 gr, pasta blanca cocida, / 40 gr, queso panela regular, vegetales al gusto",
          },
          {
            name: "Pescado con arroz",
            details: "250 gr, gr, pescado blanco (tilapia), 250 gr, arroz blanco cocido, 60 gr aguacate, vegetales al gusto",
          },
        ],
      },
      {
        label: "Cena",
        meal_time: "20:00",
        options: [
          {
            name: "Pollo con arroz",
            details: "230 gr, pechuga de pollo, 250 gr, arroz blanco cocido, 60 gr, aguacate , *vegetales al gusto",
          },
          {
            name: "Res con pasta",
            details:
              "185 gr, carne de res, 305 gr, pasta blanca cocida, / 40 gr, queso panela regular, vegetales al gusto",
          },
          {
            name: "Pescado con arroz",
            details: "250 gr, gr, pescado blanco (tilapia), 250 gr, arroz blanco cocido, 60 gr aguacate, vegetales al gusto",
          },
        ],
      },
    ],
  },
  {
    _id: 2,
    diet_name: "Dieta para Manuel",
    diet_label: "Disminución de grasa corporal",
    author: "Nutriologo Juan Pérez",
    meals: [
      {
        label: "Desayuno",
        meal_time: "07:00",
        options: [
          {
            name: "Huevos revueltos con jamón",
            details: "Huevos (2, 100g), jamón (50g), sal y pimienta al gusto",
          },
          {
            name: "pancakes",
            details:
              " 50 gr, avena molida + 100 gr, claras de huevo + *stevia, polvo de hornear. Topping, 50 gr, fresas + 50 gr, plátano + 25 gr, crema de cacahuate natural + 20 ml miel maple sugar free",
          },
          {
            name: "Pan francés",
            details: " 2 pza, pan multigrano (Oroweat) + 100 gr, claras de huevo + *stevia, canela. opping, 50 gr, fresas + 50 gr, plátano + 25 gr, crema de cacahuate natural + 20 ml miel maple sugar free",
          },
        ],
      },
      {
        label: "Snack",
        meal_time: "10:00",
        options: [
          {
            name: "Bowl de yogurt",
            details: " 150 gr, yogurt griego 0% (Fage o Chobani) *endulzar con stevia + 130 gr, plátano picado + 100 gr, mezcla de moras + 10 gr, almendras. ",
          },
        ],
      },
      {
        label: "Comida fuerte",
        meal_time: "15:00",
        options: [
          {
            name: "Pollo con arroz",
            details: "230 gr, pechuga de pollo, 250 gr, arroz blanco cocido, 60 gr, aguacate , *vegetales al gusto",
          },
          {
            name: "Res con pasta",
            details:
              "185 gr, carne de res, 305 gr, pasta blanca cocida, / 40 gr, queso panela regular, vegetales al gusto",
          },
          {
            name: "Pescado con arroz",
            details: "250 gr, gr, pescado blanco (tilapia), 250 gr, arroz blanco cocido, 60 gr aguacate, vegetales al gusto",
          },
        ],
      },
      {
        label: "Cena",
        meal_time: "20:00",
        options: [
          {
            name: "Pollo con arroz",
            details: "230 gr, pechuga de pollo, 250 gr, arroz blanco cocido, 60 gr, aguacate , *vegetales al gusto",
          },
          {
            name: "Res con pasta",
            details:
              "185 gr, carne de res, 305 gr, pasta blanca cocida, / 40 gr, queso panela regular, vegetales al gusto",
          },
          {
            name: "Pescado con arroz",
            details: "250 gr, gr, pescado blanco (tilapia), 250 gr, arroz blanco cocido, 60 gr aguacate, vegetales al gusto",
          },
        ],
      },
    ],
  },
  {
    _id: 3,
    diet_name: "Dieta para Uriel",
    diet_label: "Dieta vegana",
    author: "Nutriologa María García",
    meals: [
      {
        label: "Desayuno",
        meal_time: "07:00",
        options: [
          {
            name: "Huevos revueltos con jamón",
            details: "Huevos (2, 100g), jamón (50g), sal y pimienta al gusto",
          },
          {
            name: "pancakes",
            details:
              " 50 gr, avena molida + 100 gr, claras de huevo + *stevia, polvo de hornear. Topping, 50 gr, fresas + 50 gr, plátano + 25 gr, crema de cacahuate natural + 20 ml miel maple sugar free",
          },
          {
            name: "Pan francés",
            details: " 2 pza, pan multigrano (Oroweat) + 100 gr, claras de huevo + *stevia, canela. opping, 50 gr, fresas + 50 gr, plátano + 25 gr, crema de cacahuate natural + 20 ml miel maple sugar free",
          },
        ],
      },
      {
        label: "Snack",
        meal_time: "10:00",
        options: [
          {
            name: "Bowl de yogurt",
            details: " 150 gr, yogurt griego 0% (Fage o Chobani) *endulzar con stevia + 130 gr, plátano picado + 100 gr, mezcla de moras + 10 gr, almendras. ",
          },
        ],
      },
      {
        label: "Comida fuerte",
        meal_time: "15:00",
        options: [
          {
            name: "Pollo con arroz",
            details: "230 gr, pechuga de pollo, 250 gr, arroz blanco cocido, 60 gr, aguacate , *vegetales al gusto",
          },
          {
            name: "Res con pasta",
            details:
              "185 gr, carne de res, 305 gr, pasta blanca cocida, / 40 gr, queso panela regular, vegetales al gusto",
          },
          {
            name: "Pescado con arroz",
            details: "250 gr, gr, pescado blanco (tilapia), 250 gr, arroz blanco cocido, 60 gr aguacate, vegetales al gusto",
          },
        ],
      },
      {
        label: "Cena",
        meal_time: "20:00",
        options: [
          {
            name: "Pollo con arroz",
            details: "230 gr, pechuga de pollo, 250 gr, arroz blanco cocido, 60 gr, aguacate , *vegetales al gusto",
          },
          {
            name: "Res con pasta",
            details:
              "185 gr, carne de res, 305 gr, pasta blanca cocida, / 40 gr, queso panela regular, vegetales al gusto",
          },
          {
            name: "Pescado con arroz",
            details: "250 gr, gr, pescado blanco (tilapia), 250 gr, arroz blanco cocido, 60 gr aguacate, vegetales al gusto",
          },
        ],
      },
    ],
  },
  {
    _id: 4,
    diet_name: "Dieta para Hilda",
    diet_label: "Aumento de masa muscular",
    author: "Nutriologa María García",
    meals: [
      {
        label: "Desayuno",
        meal_time: "07:00",
        options: [
          {
            name: "Huevos revueltos con jamón",
            details: "Huevos (2, 100g), jamón (50g), sal y pimienta al gusto",
          },
          {
            name: "pancakes",
            details:
              " 50 gr, avena molida + 100 gr, claras de huevo + *stevia, polvo de hornear. Topping, 50 gr, fresas + 50 gr, plátano + 25 gr, crema de cacahuate natural + 20 ml miel maple sugar free",
          },
          {
            name: "Pan francés",
            details: " 2 pza, pan multigrano (Oroweat) + 100 gr, claras de huevo + *stevia, canela. opping, 50 gr, fresas + 50 gr, plátano + 25 gr, crema de cacahuate natural + 20 ml miel maple sugar free",
          },
        ],
      },
      {
        label: "Snack",
        meal_time: "10:00",
        options: [
          {
            name: "Bowl de yogurt",
            details: " 150 gr, yogurt griego 0% (Fage o Chobani) *endulzar con stevia + 130 gr, plátano picado + 100 gr, mezcla de moras + 10 gr, almendras. ",
          },
        ],
      },
      {
        label: "Comida fuerte",
        meal_time: "15:00",
        options: [
          {
            name: "Pollo con arroz",
            details: "230 gr, pechuga de pollo, 250 gr, arroz blanco cocido, 60 gr, aguacate , *vegetales al gusto",
          },
          {
            name: "Res con pasta",
            details:
              "185 gr, carne de res, 305 gr, pasta blanca cocida, / 40 gr, queso panela regular, vegetales al gusto",
          },
          {
            name: "Pescado con arroz",
            details: "250 gr, gr, pescado blanco (tilapia), 250 gr, arroz blanco cocido, 60 gr aguacate, vegetales al gusto",
          },
        ],
      },
      {
        label: "Cena",
        meal_time: "20:00",
        options: [
          {
            name: "Pollo con arroz",
            details: "230 gr, pechuga de pollo, 250 gr, arroz blanco cocido, 60 gr, aguacate , *vegetales al gusto",
          },
          {
            name: "Res con pasta",
            details:
              "185 gr, carne de res, 305 gr, pasta blanca cocida, / 40 gr, queso panela regular, vegetales al gusto",
          },
          {
            name: "Pescado con arroz",
            details: "250 gr, gr, pescado blanco (tilapia), 250 gr, arroz blanco cocido, 60 gr aguacate, vegetales al gusto",
          },
        ],
      },
    ],
  },
  {
    _id: 5,
    diet_name: "Dieta para Andy",
    diet_label: "Disminución de grasa corporal",
    author: "Nutriologa María García",
    meals: [
      {
        label: "Desayuno",
        meal_time: "07:00",
        options: [
          {
            name: "Huevos revueltos con jamón",
            details: "Huevos (2, 100g), jamón (50g), sal y pimienta al gusto",
          },
          {
            name: "pancakes",
            details:
              " 50 gr, avena molida + 100 gr, claras de huevo + *stevia, polvo de hornear. Topping, 50 gr, fresas + 50 gr, plátano + 25 gr, crema de cacahuate natural + 20 ml miel maple sugar free",
          },
          {
            name: "Pan francés",
            details: " 2 pza, pan multigrano (Oroweat) + 100 gr, claras de huevo + *stevia, canela. opping, 50 gr, fresas + 50 gr, plátano + 25 gr, crema de cacahuate natural + 20 ml miel maple sugar free",
          },
        ],
      },
      {
        label: "Snack",
        meal_time: "10:00",
        options: [
          {
            name: "Bowl de yogurt",
            details: " 150 gr, yogurt griego 0% (Fage o Chobani) *endulzar con stevia + 130 gr, plátano picado + 100 gr, mezcla de moras + 10 gr, almendras. ",
          },
        ],
      },
      {
        label: "Comida fuerte",
        meal_time: "15:00",
        options: [
          {
            name: "Pollo con arroz",
            details: "230 gr, pechuga de pollo, 250 gr, arroz blanco cocido, 60 gr, aguacate , *vegetales al gusto",
          },
          {
            name: "Res con pasta",
            details:
              "185 gr, carne de res, 305 gr, pasta blanca cocida, / 40 gr, queso panela regular, vegetales al gusto",
          },
          {
            name: "Pescado con arroz",
            details: "250 gr, gr, pescado blanco (tilapia), 250 gr, arroz blanco cocido, 60 gr aguacate, vegetales al gusto",
          },
        ],
      },
      {
        label: "Cena",
        meal_time: "20:00",
        options: [
          {
            name: "Pollo con arroz",
            details: "230 gr, pechuga de pollo, 250 gr, arroz blanco cocido, 60 gr, aguacate , *vegetales al gusto",
          },
          {
            name: "Res con pasta",
            details:
              "185 gr, carne de res, 305 gr, pasta blanca cocida, / 40 gr, queso panela regular, vegetales al gusto",
          },
          {
            name: "Pescado con arroz",
            details: "250 gr, gr, pescado blanco (tilapia), 250 gr, arroz blanco cocido, 60 gr aguacate, vegetales al gusto",
          },
        ],
      },
    ],
  },
];

export default data;
