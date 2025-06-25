'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './Pintura.module.css';

export default function Pintura() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

  const cores = ['#000000', '#FF0000', '#00AA00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#ffffff', '#808080'];

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }, []);

  // Helper para pegar a posição do toque relativo ao canvas
  const getTouchPos = (touchEvent) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const touch = touchEvent.touches[0];
    return {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    let pos;
    if (e.type === 'mousedown') {
      pos = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
    } else if (e.type === 'touchstart') {
      pos = getTouchPos(e);
    }
    setIsDrawing(true);
    setCurrentPos(pos);
  };

  const draw = (e) => {
    e.preventDefault();
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext('2d');
    let pos;
    if (e.type === 'mousemove') {
      pos = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
    } else if (e.type === 'touchmove') {
      pos = getTouchPos(e);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(currentPos.x, currentPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    setCurrentPos(pos);
  };

  const stopDrawing = (e) => {
    e.preventDefault();
    setIsDrawing(false);
  };

  const limpar = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Pinte o desenho!</h2>

      <div className={styles.painel}>
        <div className={styles.cores}>
          {cores.map((cor) => (
            <button
              key={cor}
              className={`${styles.botaoCor} ${color === cor ? styles.ativa : ''}`}
              style={{ backgroundColor: cor }}
              onClick={() => setColor(cor)}
              aria-label={`Selecionar cor ${cor}`}
            />
          ))}
        </div>

        <div className={styles.pinceis}>
          <button
            onClick={() => setBrushSize(3)}
            className={brushSize === 3 ? styles.ativo : ''}
            aria-label="Pincel fino"
          >🖊️</button>
          <button
            onClick={() => setBrushSize(8)}
            className={brushSize === 8 ? styles.ativo : ''}
            aria-label="Pincel médio"
          >🖌️</button>
          <button
            onClick={() => setBrushSize(14)}
            className={brushSize === 14 ? styles.ativo : ''}
            aria-label="Pincel grosso"
          >🖍️</button>
        </div>

        <button onClick={limpar} className={styles.botaoLimpar}>Limpar</button>
      </div>

      <div className={styles.canvasWrapper}>
        <canvas
          ref={canvasRef}
          className={styles.canvas}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}

          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          onTouchCancel={stopDrawing}
        />
      </div>
    </div>
  );
}
