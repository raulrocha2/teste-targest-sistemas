const faturamentoDiario = [
    0, 2000, 1500, 0, 3000, 2500, 0, 4000, 3500, 0, 0, 0, 1000, 0, 1800, 2200
  ];
  
  function calcularFaturamento(faturamentoDiario) {
    const diasComFaturamento = faturamentoDiario.filter(faturamento => faturamento > 0);
  
    const menorFaturamento = Math.min(...diasComFaturamento);
    const maiorFaturamento = Math.max(...diasComFaturamento);
  
    const somaFaturamento = diasComFaturamento.reduce((acc, valor) => acc + valor, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
  
    const diasAcimaDaMedia = diasComFaturamento.filter(faturamento => faturamento > mediaFaturamento).length;
  
    return {
      menorFaturamento,
      maiorFaturamento,
      diasAcimaDaMedia
    };
  }
  
  const resultado = calcularFaturamento(faturamentoDiario);
  console.log("Menor valor de faturamento:", resultado.menorFaturamento);
  console.log("Maior valor de faturamento:", resultado.maiorFaturamento);
  console.log("Número de dias com faturamento superior à média:", resultado.diasAcimaDaMedia);