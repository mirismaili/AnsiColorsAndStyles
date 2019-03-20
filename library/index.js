/**
 * @author <a href="https://mirismaili.github.io">S. Mahdi Mir-Ismaili</a>.
 * Created on 1397/12/26 (2019/3/17).
 *
 * See: https://en.wikipedia.org/wiki/ANSI_escape_code
 */

// Colors and styles by [bodi0](https://stackoverflow.com/users/632524/bodi0):
//      https://stackoverflow.com/a/41407246/5318303

const RESET      =  '\x1b[0m';
const BRIGHT     =  '\x1b[1m';
const DIM        =  '\x1b[2m';
const UNDERSCORE =  '\x1b[4m';
const BLINK      =  '\x1b[5m';
const REVERSE    =  '\x1b[7m';
const HIDDEN     =  '\x1b[8m';

const FG_BLACK   = '\x1b[30m';
const FG_RED     = '\x1b[31m';
const FG_GREEN   = '\x1b[32m';
const FG_YELLOW  = '\x1b[33m';
const FG_BLUE    = '\x1b[34m';
const FG_MAGENTA = '\x1b[35m';
const FG_CYAN    = '\x1b[36m';
const FG_WHITE   = '\x1b[37m';

const BG_BLACK   = '\x1b[40m';
const BG_RED     = '\x1b[41m';
const BG_GREEN   = '\x1b[42m';
const BG_YELLOW  = '\x1b[43m';
const BG_BLUE    = '\x1b[44m';
const BG_MAGENTA = '\x1b[45m';
const BG_CYAN    = '\x1b[46m';
const BG_WHITE   = '\x1b[47m';
//------------------------------------------------------------------/

module.exports = {
	RESET      : RESET,
	BRIGHT     : BRIGHT,
	DIM        : DIM,
	UNDERSCORE : UNDERSCORE,
	BLINK      : BLINK,
	REVERSE    : REVERSE,
	HIDDEN     : HIDDEN,

	FG_BLACK   : FG_BLACK,
	FG_RED     : FG_RED,
	FG_GREEN   : FG_GREEN,
	FG_YELLOW  : FG_YELLOW,
	FG_BLUE    : FG_BLUE,
	FG_MAGENTA : FG_MAGENTA,
	FG_CYAN    : FG_CYAN,
	FG_WHITE   : FG_WHITE,

	BG_BLACK   : BG_BLACK,
	BG_RED     : BG_RED,
	BG_GREEN   : BG_GREEN,
	BG_YELLOW  : BG_YELLOW,
	BG_BLUE    : BG_BLUE,
	BG_MAGENTA : BG_MAGENTA,
	BG_CYAN    : BG_CYAN,
	BG_WHITE   : BG_WHITE,
    //------------------------------------------------------------------/

	T   : RESET,
	RS  : RESET,
	RT  : RESET,
	RST : RESET,

	B    : BRIGHT,
	BD   : BRIGHT,
	BR   : BRIGHT,
	BLD  : BRIGHT,
	BRT  : BRIGHT,
	BOLD : BRIGHT,

	I   : DIM,
	DM  : DIM,
    //DIM : DIM,

	U         : UNDERSCORE,
	UL        : UNDERSCORE,
	US        : UNDERSCORE,
	UNL       : UNDERSCORE,
	UNS       : UNDERSCORE,
	UNDERLINE : UNDERSCORE,

	N   : BLINK,
	BN  : BLINK,
	BNK : BLINK,

	V   : REVERSE,
	RV  : REVERSE,
	RVR : REVERSE,

	H   : HIDDEN,
	HN  : HIDDEN,
	HDN : HIDDEN,
    //------------------------------------------------------------------/

	K       : FG_BLACK,
	BK      : FG_BLACK,
	BLK     : FG_BLACK,
	BLACK   : FG_BLACK,

	R       : FG_RED,
	RD      : FG_RED,
	RED     : FG_RED,

	G       : FG_GREEN,
	GR      : FG_GREEN,
	GRN     : FG_GREEN,
	GREEN   : FG_GREEN,

	Y       : FG_YELLOW,
	YL      : FG_YELLOW,
	YLW     : FG_YELLOW,
	YELLOW  : FG_YELLOW,

	E       : FG_BLUE,
	BL      : FG_BLUE,
	BLU     : FG_BLUE,
	BLUE    : FG_BLUE,

	M       : FG_MAGENTA,
	MG      : FG_MAGENTA,
	MGN     : FG_MAGENTA,
	MAGENTA : FG_MAGENTA,

	C       : FG_CYAN,
	CN      : FG_CYAN,
	CYN     : FG_CYAN,
	CYAN    : FG_CYAN,

	W       : FG_WHITE,
	WT      : FG_WHITE,
	WHT     : FG_WHITE,
	WHITE   : FG_WHITE,
    //------------------------------------------------------------------/

	_K       : BG_BLACK,
	_BK      : BG_BLACK,
	_BLK     : BG_BLACK,
	_BLACK   : BG_BLACK,

	_R       : BG_RED,
	_RD      : BG_RED,
	_RED     : BG_RED,

	_G       : BG_GREEN,
	_GR      : BG_GREEN,
	_GRN     : BG_GREEN,
	_GREEN   : BG_GREEN,

	_Y       : BG_YELLOW,
	_YL      : BG_YELLOW,
	_YLW     : BG_YELLOW,
	_YELLOW  : BG_YELLOW,

	_E       : BG_BLUE,
	_BL      : BG_BLUE,
	_BLU     : BG_BLUE,
	_BLUE    : BG_BLUE,

	_M       : BG_MAGENTA,
	_MG      : BG_MAGENTA,
	_MGN     : BG_MAGENTA,
	_MAGENTA : BG_MAGENTA,

	_C       : BG_CYAN,
	_CN      : BG_CYAN,
	_CYN     : BG_CYAN,
	_CYAN    : BG_CYAN,

	_W       : BG_WHITE,
	_WT      : BG_WHITE,
	_WHT     : BG_WHITE,
	_WHITE   : BG_WHITE,
};
