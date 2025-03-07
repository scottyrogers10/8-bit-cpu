import adc from "./adc";
import beq from "./beq";
import bne from "./bne";
import brk from "./brk";
import clc from "./clc";
import jmp from "./jmp";
import lda from "./lda";
import ldx from "./ldx";
import ldy from "./ldy";
import nop from "./nop";
import sec from "./sec";
import sta from "./sta";
import stx from "./stx";
import sty from "./sty";

export default {
	...adc,
	...beq,
	...bne,
	...brk,
	...clc,
	...jmp,
	...lda,
	...ldx,
	...ldy,
	...nop,
	...sec,
	...sta,
	...stx,
	...sty,
};
