const handleCopyText = (sec: string | undefined) => {
  sec ? copy(sec) : null;

  async function copy(alo: string) {
    await navigator.clipboard.writeText(alo);
  }
};

export default handleCopyText;
