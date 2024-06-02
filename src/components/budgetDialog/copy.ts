const handleCopyText = (sec: undefined | string) => {
  typeof sec === 'string' && copy(sec)

  async function copy(alo: string) {
    await navigator.clipboard.writeText(alo);
  }
};

export default handleCopyText;
