export default function createBoilerplateInput(boilerplate, idNumber) {
  return Object.fromEntries(
    Object.keys(boilerplate).map((key) => {
      if (key === 'id') return [key, Number(idNumber)];
      return [key, ''];
    })
  );
}
