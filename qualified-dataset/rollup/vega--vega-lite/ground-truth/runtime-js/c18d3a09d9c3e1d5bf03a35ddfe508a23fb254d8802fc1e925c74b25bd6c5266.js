(function anonymous(item,_
) {
var o=item,datum=o.datum,m=0,$;$=1;if(o["opacity"]!==$)o["opacity"]=$,m=1;$=null;if(o["anchor"]!==$)o["anchor"]=$,m=1;$=((item.anchor === 'start')?"left":((item.anchor === 'end')?"right":"center"));if(o["align"]!==$)o["align"]=$,m=1;$="b";if(o["text"]!==$)o["text"]=$,m=1;$=this.lerp(this.range("y"),((item.anchor === 'start')?0:((item.anchor === 'end')?1:0.5)));if(o["y"]!==$)o["y"]=$,m=1;$=(-90);if(o["angle"]!==$)o["angle"]=$,m=1;$="bottom";if(o["baseline"]!==$)o["baseline"]=$,m=1;return m;
})