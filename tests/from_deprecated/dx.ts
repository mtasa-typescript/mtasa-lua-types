import { mtasa } from 'types/mtasa/client';

const color: number = mtasa.tocolor(13, 14, 15);
const drawImage: boolean = mtasa.dxDrawImage(0, 0, 128, 326, '');
const drawImageSection: boolean = mtasa.dxDrawImageSection(0, 0, 16, 16, 64, 64, 8, 8, 'img');
const drawLine: boolean = mtasa.dxDrawLine(3, 4, 1, 0, 0xFFFFFFFF);
const drawLine3D: boolean = mtasa.dxDrawLine3D(-100, -120, -150, 540, 541, 542);

// TODO: complete tests for deprecated module
/*
const drawRectangle: boolean = mtasa.dxDrawRectangle();
const drawText: boolean = mtasa.dxDrawText();
const getFontHeight: number = mtasa.dxGetFontHeight();
const getTextWidth: number = mtasa.dxGetTextWidth();
const createFont: mtasa.Element = mtasa.dxCreateFont();
const createTexture1: mtasa.DxTexture = mtasa.dxCreateTexture();
const createTexture2: mtasa.DxTexture = mtasa.dxCreateTexture();
const createTexture3: mtasa.DxTexture = mtasa.dxCreateTexture();
const createShader: [mtasa.Element, string] = mtasa.dxCreateShader();
const createRenderTarget: mtasa.Element = mtasa.dxCreateRenderTarget();
const createScreenSource: mtasa.Element = mtasa.dxCreateScreenSource();
const getMaterialSize: [number, number, number?] = mtasa.dxGetMaterialSize();
const setShaderValue: boolean = mtasa.dxSetShaderValue();
*/