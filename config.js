// Configuração pública do site. Nada aqui é segredo:
// a chave do Supabase é a pública (só alcança as funções da viagem) e o Client ID do Spotify é público por definição.
// O código da viagem NÃO fica aqui; ele vem no link (?k=...) e fica salvo só no aparelho.
window.TRIP_CONFIG = {
  supabaseUrl: 'https://cwndenjpiibwobtkwzig.supabase.co',
  supabaseKey: 'sb_publishable_IvFAnItybjFtHS9uZwEmHA_X5u-LZt3',
  spotifyClientId: 'babd9979abd34b53976825ca8732174a'
};
