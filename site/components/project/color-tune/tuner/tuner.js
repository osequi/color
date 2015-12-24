$('.tuner .tuner__colorpicker').spectrum({
  showInput: true,
  showAlpha: true,
  showInitial: true,
  showPalette: true,
  showSelectionPalette: true,
  palette: [
    '#ffffff', '#FFFFE5', '#FFE5FF', '#FFEDE5', '#FFB2B2', '#f9f9f9f', '#f1f1f1',
    '#E5E5E5', '#BFBFBF', '#BFCCB8', '#CCBEB8', '#CCCCCC',
    '#B8C4CC', '#A1ACB2', '#7F7F7F', '#7F5959', '#404040',
    '#E8D1DC', '#E8D4D1', '#FFB2B2', '#7F5959', '#B2A1A1', '#8FB299', '#BFFFBF', '#996E5C',

    '#000000', '#2E3133', '#263326', '#332F2E', '#33332E', '#332E30', '#332E33', '#30332E', '#332F2E',
    '#333333', '#4C4C4C', '#454A4C', '#8C8C8C',
    '#4C3636', '#332424', '#4C4545', '#3D4C42', '#4C4545', '#66493D'
  ],
  change: function(color) {
    $(this).parent().attr('data-color', color.toHexString());
  }
});
