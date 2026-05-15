import { useState, useEffect } from 'react';
import axios from 'axios';

//const BASE_URL = '/api';

const BASE_URL = import.meta.env.VITE_API_URL || '/api';

export function useProjetos(filtros = {}) {
  const [projetos, setProjetos]   = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro]           = useState(null);

  useEffect(() => {
    setCarregando(true);
    const params = new URLSearchParams(filtros).toString();
    axios.get(`${BASE_URL}/projetos${params ? '?' + params : ''}`)
      .then(res  => { setProjetos(res.data.dados); setErro(null); })
      .catch(err => setErro('Erro ao carregar projetos'))
      .finally(()=> setCarregando(false));
  }, [JSON.stringify(filtros)]);

  return { projetos, carregando, erro };
}

export function useConfig() {
  const [config, setConfig]       = useState({});
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/contato/config`)
      .then(res => setConfig(res.data.dados))
      .catch(() => {})
      .finally(() => setCarregando(false));
  }, []);

  return { config, carregando };
}

export async function enviarMensagem(dados) {
  const res = await axios.post(`${BASE_URL}/contato`, dados);
  return res.data;
}
