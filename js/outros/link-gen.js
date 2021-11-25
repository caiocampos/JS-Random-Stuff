var f = (data, link) => {
  var {CODPRD, NOMIMG, DATIMG} = data[0];
  return `${link}/${CODPRD}/${NOMIMG}?v=${dayjs(DATIMG).format('DDMMYYYYhhmm')}`;
}
