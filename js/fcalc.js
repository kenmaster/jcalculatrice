var Fcalc = new Class({
    initialize: function(parentID){
       
        var canvas = new Element('table#fcalc');
        var display = new Element('tr#display');
        var l1 = new Element('tr#ligneun').addClass('nombres');
        var l2 = new Element('tr#lignedeux').addClass('nombres');
        var l3 = new Element('tr#lignetrois').addClass('nombres');
        var l4 = new Element('tr#lignequatre').addClass('nombres');
        var l5 = new Element('tr#lignecinq').addClass('nombres');
        
        if(canvas.adopt(display,l5,l4,l3,l2,l1).inject(parentID)) {
            this.build();
            
           l1.adopt(this.zero,this.dot,this.c,this.egal);
           l2.adopt(this.un,this.deux,this.trois,this.plus);
           l3.adopt(this.quatre,this.cinq,this.six,this.moins);
           l4.adopt(this.sept,this.huit,this.neuf,this.multiplie);
           l5.adopt(this.mrc,this.mrmoins,this.mrplus,this.divise);
           display.adopt(this.ecran);
           
        }
        
       
    },
    
    signe: function(op){
        this.toSave = this.getScreen()+ op;
        //this.display(0);
    },
    
    display: function(val){
        $('resultat').set('value',val);
    },
    
    getScreen: function(){
       if($('resultat').value != 0){
           return $('resultat').value;
       } else return '';
       
    },
    
    number: function(nb){
        if(this.toSave == undefined)
            this.display(this.getScreen()+nb);
        else {
            this.display(nb);
            console.log(this.toSave);
        }
    },
    
    build: function(){
        
        this.zero = new Element('td', {
            html: 0,
            id: 'zero',
            events: {
                click: function () {
                    this.number(0);
                }.bind(this)
            } 
        });
        
        this.dot = new Element('td', {
            html: '.',
            id: 'dot',
            events: {
                click: function() {
                    this.number('.');
                }.bind(this)
            }
        });
        
        this.c = new Element('td', {
            html: 'c',
            'class': 'operateur',
            id: 'c',
            events: {
                click: function() {
                    this.display(0);
                }.bind(this)
            }
        });
        
        this.egal = new Element('td', {
            html: '=',
            id: 'egal',
            'class': 'operateur',
            events: {
                click: function() {
                    var x = 0;
                    x = eval(this.toSave+parseInt(this.getScreen()));
                    this.display(x);
                    delete this.toSave;
                }.bind(this)
            }
        });
        
        this.un = new Element('td', {
            html: 1,
            id: 'un',
            events: {
                click: function() {
                   this.number(1);
                }.bind(this)
            }
        });
        
        this.deux = new Element('td', {
            html: 2,
            id: 'deux',
            events: {
                click: function() {
                    this.number(2);
                }.bind(this)
            }
        });
        
        this.trois = new Element('td', {
            html: 3,
            id: 'trois',
            events: {
                click: function() {
                    this.number(3);
                }.bind(this)
            }
        });
        
        this.plus = new Element('td', {
            html: '+',
            id: 'plus',
            'class': 'operateur',
            events: {
                click: function() {
                    this.signe('+');
                }.bind(this)
            }
        });
        
        this.moins = new Element('td', {
            html: '-',
            id: 'moins',
            'class': 'operateur',
            events: {
                click: function() {
                    this.signe('-');
                }.bind(this)
            }
        });
        
        this.quatre = new Element('td', {
            html: 4,
            id: 'quatre',
            events: {
                click: function() {
                    this.number(4);
                }.bind(this)
            }
        });
        
        this.cinq = new Element('td', {
            html: 5,
            id: 'cinq',
            events: {
                click: function() {
                    this.number(5);
                }.bind(this)
            }
        });
        
        this.six = new Element('td', {
            html: 6,
            id: 'six',
            events: {
                click: function() {
                    this.number(6);
                }.bind(this)
            } 
        });
        
        this.sept = new Element('td', {
            html: 7,
            id: 'sept',
            events: {
                click: function() {
                    this.number(7);
                }.bind(this)
            }
        });
        
        this.huit = new Element('td', {
            html: 8,
            id: 'huit',
            events: {
                click: function() {
                    this.number(8);
                }.bind(this)
            }
        });
        
        this.neuf = new Element('td', {
            html: 9,
            id: 'neuf',
            events: {
                click: function() {
                    this.number(9);
                }.bind(this)
            }
        });
        
        this.multiplie = new Element('td', {
            html: '*',
            id: 'multiplie',
            'class': 'operateur',
            events: {
                click: function() {
                   this.signe('*');
                }.bind(this)
            }
        });
        
        this.divise = new Element('td', {
            html: '/',
            id: 'divise',
            'class': 'operateur',
            events: {
                click: function() {
                    this.signe('/');
                }.bind(this)
            }
        });
        
        this.mrc = new Element('td', {
            html: 'mrc',
            id: 'mrc',
            'class': 'operateur',
            events: {
                click: function() {
                    if(this.memo == undefined) {
                        this.display(0);
                    } else {
                        this.display(this.memo);
                    }
                }.bind(this)
            }
        });
        
        this.mrplus = new Element('td', {
            html: 'mrplus',
            id: 'mrplus',
            'class': 'operateur',
            events: {
                click: function() {
                    if(!this.memo){
                        this.memo = this.getScreen();
                    }
                }.bind(this)
            }
        });
        
       this.mrmoins = new Element('td', {
            html: 'mrmoins',
            id: 'mrmoins',
            'class': 'operateur',
            events: {
                click: function() {
                    if(this.memo){
                        delete this.memo;
                        this.display(0);
                    }
                }.bind(this)
            }
        });
        
        this.ecran = new Element('td', {
           'colspan': 4,
           id: 'affichage',
           html: '<output id="resultat"/>0</output>'
        });
       
       
       /*
       $$('#calculatrice .nombres td').each(function(elem, index)){
          elem. 
       }); */
        
    }
});

