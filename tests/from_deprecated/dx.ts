import { mtasa } from 'types/mtasa/client';

const color: number = mtasa.tocolor(13, 14, 15);
const drawImage: boolean = mtasa.dxDrawImage(0, 0, 128, 326, '');
const drawImageSection: boolean = mtasa.dxDrawImageSection(
    0,
    0,
    16,
    16,
    64,
    64,
    8,
    8,
    'img',
);
const drawLine: boolean = mtasa.dxDrawLine(3, 4, 1, 0, 0xffffffff);
const drawLine3D: boolean = mtasa.dxDrawLine3D(-100, -120, -150, 540, 541, 542);

const drawRectangle1: boolean = mtasa.dxDrawRectangle(
    0,
    1,
    3,
    4,
    0xffffffff,
    false,
    true,
);
const drawRectangle2: boolean = mtasa.dxDrawRectangle(
    0,
    1,
    3,
    4,
    0xffffffff,
    false,
);
const drawRectangle3: boolean = mtasa.dxDrawRectangle(0, 1, 3, 4);

const drawText: boolean = mtasa.dxDrawText(
    'text',
    10,
    11,
    0,
    1,
    0xffffffff,
    12,
    1,
    'Times New Roman',
);

const getFontHeight1: number = mtasa.dxGetFontHeight();

const getFontHeight2: number = mtasa.dxGetFontHeight(10, 'Times New Roman');

const getTextWidth1: number = mtasa.dxGetTextWidth('Some text');

const getTextWidth2: number = mtasa.dxGetTextWidth(
    'Some text',
    10,
    'Times New Roman',
);

const createFont: mtasa.Element = mtasa.dxCreateFont('filepath', 10);

const createTexture1: mtasa.DxTexture = mtasa.dxCreateTexture(
    'filepath',
    'argb',
    true,
);

const createTexture2: mtasa.DxTexture = mtasa.dxCreateTexture(
    100,
    120,
    'rgb',
    'mirror',
);

const createTexture3: mtasa.DxTexture = mtasa.dxCreateTexture(
    'pixel binary info',
    'rgb',
    false,
);

const createShader: [mtasa.Element, string] = mtasa.dxCreateShader(
    'filepath',
    1,
    1000,
);

const createRenderTarget: mtasa.Element = mtasa.dxCreateRenderTarget(
    20,
    20,
    true,
);

const createScreenSource: mtasa.Element = mtasa.dxCreateScreenSource(500, 500);

const getMaterialSize: [number, number, number?] = mtasa.dxGetMaterialSize(
    mtasa.getElementByID('elementId'),
);

const setShaderValue: boolean = mtasa.dxSetShaderValue(
    mtasa.getElementByID('elementId'),
    'parameterName',
    100,
);
