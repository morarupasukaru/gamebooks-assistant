class ExportController {
    /*@ngInject*/
    constructor() {
        this.data = 'public final class Pattern'+
'extends Object'+
'implements Serializable'+
'A compiled representation of a regular expression.'+
'A regular expression, specified as a string, must first be compiled into an instance of this class. The resulting pattern can then be used to create a Matcher object that can match arbitrary character sequences against the regular expression. All of the state involved in performing a match resides in the matcher, so many matchers can share the same pattern.'+

'A typical invocation sequence is thus'+

' Pattern p = Pattern.compile("a*b");'+
' Matcher m = p.matcher("aaaaab");'+
' boolean b = m.matches();'+
'A matches method is defined by this class as a convenience for when a regular expression is used just once. This method compiles an expression and matches an input sequence against it in a single invocation. The statement';
    }
}

export default ExportController;