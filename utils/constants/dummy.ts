import ResultEnum from '../enums/ResultEnum';
import ResultInfo from '../types/ResultInfo';

const dummy: ResultInfo[] = [
  {
    title: 'Total Cholesterol',
    result: {
      category: ResultEnum.BORDERLINE_HIGH,
      value: 5.7
    },
    ranges: [5.2, 6.1],
    resultTab:
      'Total amount of cholesterol in your blood includes the good (HDL cholesterol) and bad (LDL cholesterol).\nKeeping the total cholesterol within a healthy range is important. If it is too high, it could mean too much bad cholesterol. If it is too low, it could mean too little good cholesterol.',
    tipsTab:
      'Consume more high-fibre foods (eg. fruits, vegetables and wholegrains etc.)\nLimit food high in cholesterol (animal products like organ meat, egg yolk, prawns)\nFor more lifestyle tips, visit healthhub.com. Do  also consult a doctor if necessary for more information on managing your condition.'
  },
  {
    title: 'Triglycerides',
    result: {
      category: ResultEnum.NORMAL,
      value: 1.0
    },
    ranges: [2.2, 4.5]
    resultTab:
      'Triglycerides are a type of fat in our blood, they serve as a source of energy.\nHaving some triglycerides is necessary for body to function. But too much of it increases the risk of heart diseases and other health problems.',
    tipsTab:
      'Great job, your triglycerides levels are healthy, keep it up! Do continue:\nMaintaining a healthy diet low in saturated fats and trans fat\nLeading an active lifestyle'
  },
  {
    title: 'HDL Cholesterol',
    result: {
      category: ResultEnum.LOW,
      value: 0.9
    },
    ranges: [1.0, 1.6],
    resultTab:
      'HDL (high-density lipoprotein) cholesterol is the good cholesterol.\nGenerally good to have higher levels of HDL cholesterol in your body as  it helps remove excess cholesterol from your blood vessels and protects your heart, lowering the risk of heart disease.',
    tipsTab:
      'Consume foods high in healthy fats (e.g. avocados, almonds, cashew nuts, olive oil).\nAsk your doctor or pharmacist for help to quit smoking or call QuitLine 1800-438-2000\nFor more lifestyle tips, visit healthhub.com. Do  also consult a doctor if necessary for more information on managing your condition.'
  },
  {
    title: 'LDL Cholesterol',
    result: {
      category: ResultEnum.BORDERLINE_HIGH,
      value: 3.8
    },
    ranges: [3.3, 4.1],
    resultTab:
      'LDL (low-density lipoprotein) cholesterol is the bad cholesterol.\nGenerally bad to have high levels of LDL cholesterol  in your body as excess LDL cholesterol can build up in your blood vessels, narrowing it and making it hard for blood to flow. , therefore increasing the risk of heart and cardiovascular diseases.',
    tipsTab:
      'Limit foods high in unhealthy fats (eg. fatty meats, fried foods, and processed snacks)\nConsume more foods high in healthy fats (eg. Avocados, nuts, seeds, olive oil, tune, sardines)\n150 minutes of exercise per week (eg. brisk walking, cycling, dancing etc.)\nFor more tips, visit healthhub.com'
  },
  {
    title: 'CHOL:HDL Ratio',
    result: {
      category: ResultEnum.NORMAL,
      value: 4.5
    },
    ranges: [4.5],
    resultTab:
      'CHOL:HDL is the ratio between total cholesterol (CHOL) and high-density lipoprotein (HDL) cholesterol levels in the blood.\nA higher ratio suggests that there is a higher proportion of "bad" cholesterol in relation to the "good" cholesterol, which can indicate an increased risk of heart disease and other cardiovascular problems',
    tipsTab:
      'Great job, your HDL Cholesterol levels are healthy, keep it up! Do continue:\nMaintaining a healthy diet that is low in saturated fats and trans fat and high in monosaturated fats\nLeading an active lifestyle'
  }
];

export default dummy;
