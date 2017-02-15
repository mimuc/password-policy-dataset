## Test passwords

46 test passwords in total to get a detailed picture of the password policy  

To use them in scripts, refer to the file `test-passwords.txt`, which has one password per line.

### Simple (5)

- test
- aaa
- 123456789a
- a123456789
- P@ssw0rd

### With space (1)

- password with space

### Dictionary check (6)
Top 5  of the most frequent passwords (https://github.com/dropbox/zxcvbn/blob/master/data/passwords.txt"):

- 123456
- password
- 12345678
- qwerty
- 123456789
- password1

### Letters and numbers (6)

- 20 characters
  - qwertyuiQWERTYUI1234
- 32 characters
  - qwertyuiopasdQWERTYUIOPASD123456
- 40 characters
  - qwertyuiopasdfghQWERTYUIOPASDFGH12345678
- 62 characters
  - qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890
- 72 characters
  - qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuiop
- 144 characters
  - qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuioqwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuio

### German Umlauts (6)

- 20 characters
  - Aa1ÄöÜß!"#$%&'*+,-./
- 32 characters
  - AaÄöÜß!"#$%&'*+,-./:;<=>?@|~\^_`
- 40 characters (immobilienscout24, pornhub)
  - AaÄöÜß! "#$%&'(*+,-./:;<=>?@{|}~[\]^_`01
- 50 characters (no space, Spiegel)
  - ÄäÖöÜüß!"#$%&'()*+,-./:;<=>?@{|}~[\]^_`01234567Aa
- 98 characters (no space)
  - ÄäÖöÜüß!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
- 99 characters
  - ÄäÖöÜüß! "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~


ASCII printable characters (9)
http://ascii-code.com/

- 20 characters
  - Aa1! "#$%&'()*+,-./:
  - Aa1;<=>?@[\]^_`{|}~0
- 40 characters (no space)
  - Ab!"#$%&'()*+,-./:;<=>?@{|}~[\]^_`012567
- 48 characters (no space)
  - !"#$%&'()*+,-./:;<=>?@{|}~[\]^_`0123456789ABCabc
- 50 characters (no space)
  - ! "#$%&'()*+,-./:;<=>?@{|}~[\]^_`0123456789ABCabcd
- 94 characters (no space)
  - !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
- 95 characters
  - ! "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
- 128 characters
  - ! "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~! "#$%&'()*+,-./0123456789:;<=>?@
- 190 characters
  - ! "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~! "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~

### The extended ASCII codes (8)
See http://ascii-code.com/

- 32 characters (Apple)
  - Aa1€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢
  - Aa1£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿À
  - Aa1ÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝ
  - Aa1Þßàáâãäåæçèéêëìíîïðñòóôõö÷øùú
  - Aa1ûüýþÿ€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›
- 121 characters (no space)
  - €‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ
- 123 characters
  - €‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬ ®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ
- 246 characters
  - €‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬ ®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬ ®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ

### Unicode (5)

- 60 characters
  - qwertyuiopZXCVBNM1234567890§-=[]åß∂ƒ©˙∆˚¬…æ«ÅÍÎÏ˝ÓÔÒÚÆ»˜<>?
- 60 characters
  - §1234567890-=qwertyuiop[]åß∂ƒ©˙∆˚¬…æ«ÅÍÎÏ˝ÓÔÒÚÆ»˜ZXCVBNM<>?
- 72 characters
  - §1234567890-=qwertyuiop[]åß∂ƒ©˙∆˚¬…æ«ÅÍÎÏ˝ÓÔÒÚÆ»˜ZXCVBNM<>?ASDFGHJKL:"|
- 118 characters
  - §`1qAz2wsx3edc4rfv5tgb6yhn7ujm8ik,9ol.0p;/-['=]\']œåΩ∑ß≈´∂ç®ƒ√†©∫¥˙˜¨∆µˆ˚≤ø¬≥π…÷“æ‘«’»”Æ∏Ú¿ØÒ˘ˆ¯¨ÔÂÁÓ˜ˇ˝ı‰Ï◊´ÎÇ„Í˛ŒÅ¸
- 144 characters
  - §1234567890-=qwertyuiop[]åß∂ƒ©˙∆˚¬…æ«ÅÍÎÏ˝ÓÔÒÚÆ»˜ZXCVBNM<>?ASDFGHJKL:"|§1234567890-=qwertyuiop[]åß∂ƒ©˙∆˚¬…æ«ÅÍÎÏ˝ÓÔÒÚÆ»˜ZXCVBNM<>?ASDFGHJKL:"