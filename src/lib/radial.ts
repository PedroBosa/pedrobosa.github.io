/**
 * Geometria compartilhada da roda radial, em unidades do viewBox 360 x 360.
 *
 * O menu interativo (RadialNav) e a ilustração decorativa (RadialWheel) desenham
 * o mesmo anel de setores a partir daqui — uma única fonte de verdade para o
 * desenho, o posicionamento dos ícones e o vetor de deslocamento do setor ativo.
 *
 * Convenção de ângulos: 0° aponta para o topo e cresce no sentido horário.
 */

export const UNITS = 360;
export const C = UNITS / 2;
export const R_IN = 62;
export const R_OUT = 168;
export const GAP_DEG = 3.4;
export const SHIFT = 7;

/** Ângulo a partir do topo (sentido horário) em radianos, no sistema do SVG. */
export const toRad = (deg: number) => ((deg - 90) * Math.PI) / 180;

/** Ponto sobre a circunferência de raio `r` no ângulo `deg`. */
export function point(r: number, deg: number) {
  return {
    x: +(C + r * Math.cos(toRad(deg))).toFixed(2),
    y: +(C + r * Math.sin(toRad(deg))).toFixed(2),
  };
}

/** Caminho SVG de um setor anelar (arco externo horário, interno anti-horário). */
export function sectorPath(index: number, count: number) {
  const step = 360 / count;
  const offset = -step / 2; // centraliza o primeiro setor no topo
  const a0 = index * step + offset + GAP_DEG / 2;
  const a1 = (index + 1) * step + offset - GAP_DEG / 2;

  const i0 = point(R_IN, a0);
  const o0 = point(R_OUT, a0);
  const o1 = point(R_OUT, a1);
  const i1 = point(R_IN, a1);

  return [
    `M ${i0.x} ${i0.y}`,
    `L ${o0.x} ${o0.y}`,
    `A ${R_OUT} ${R_OUT} 0 0 1 ${o1.x} ${o1.y}`,
    `L ${i1.x} ${i1.y}`,
    `A ${R_IN} ${R_IN} 0 0 0 ${i0.x} ${i0.y}`,
    'Z',
  ].join(' ');
}

/** Ponto médio do setor — onde o ícone é ancorado. */
export function anchorPoint(index: number, count: number) {
  return point((R_IN + R_OUT) / 2, index * (360 / count));
}

/** Vetor que afasta o setor ativo do centro, reforçando a sensação de escolha. */
export function shiftVector(index: number, count: number) {
  const rad = ((index * (360 / count)) * Math.PI) / 180;
  return {
    tx: +(Math.sin(rad) * SHIFT).toFixed(2),
    ty: +(-Math.cos(rad) * SHIFT).toFixed(2),
  };
}
