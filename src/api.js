const PlayerAPI = {
    players: [
      { number: 1, name: "Nancy", lname:'Davolio',  address:'Hj road a1-101', city:'Pune', postal:12, phone:123, country:'India', image : 'img123.png' },
      { number: 2, name: "Andrew", lname:'Fuller', address:'ab', city:'', postal:12, phone:123, country:'UK'},
      { number: 3, name: "Janet", lname:'Leverling', address:'ab', city:'', postal:12, phone:123, country:'Australia' },
      { number: 4, name: "Margaret", lname:'Peacock', address:'ab', city:'', postal:12, phone:123, country:'USA' },
      { number: 5, name: "Steven", lname:'Buchanan', address:'ab', city:'', postal:12, phone:123, country:'USA' },
      { number: 6, name: "Gary", lname:'Smith', address:'ab', city:'', postal:12, phone:123, country:'USA' },
      { number: 7, name: "Abhi", lname:'', address:'ab', city:'', postal:12, phone:123, country:'USA' }
    ],
    all: function() { return this.players},
    get: function(id) {
      const isPlayer = p => p.number === id
      return this.players.find(isPlayer)
    }
  }
  
  export default PlayerAPI
