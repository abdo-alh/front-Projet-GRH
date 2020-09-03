export class User {

    public id:number;
    nom:String;
    prenom:String;
    email:String;
    password:String;
    adresse:String;
    ville:String;
    datenaissance:Date;

    public constructor(){
        
    }

}

/*private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String password;
    private String adresse;
    private String ville;
    private boolean accountNonExpired = true;
    private boolean accountNonLocked = true;
    private boolean credentialsNonExpired = true;
    private boolean enabled = true;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date datenaissance;
    @ManyToMany(fetch = FetchType.EAGER)
    private List<Role> authorities;*/