/**
 * @description Para padronizar o eixo z, eu gosto de criar uma função que gera
 * todos os índices, aonde o mais alto vem em primeiro e segue de forma decrescente
 * assim conseguimos ter o controle de o que está por cima do que e não chutar números.
 */
export default function generateZindex() {
  const minimumIndex = 5000;
  const components = [
    'popoup',
    'overlay',
  ];

  const appZindexes = {};

  components.forEach((component, i) => {
    appZindexes[component] = minimumIndex + components.length - i;
  });

  return appZindexes;
}
