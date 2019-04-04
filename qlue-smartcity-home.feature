Feature: As a user I want to access qlue smart city pages

Background:
  Given user is at qlue homepage

@home @smartcity @qlue @clear @quit
Scenario: qlue - Home Page 
  Given user is at home page
  Then user should see "<options>" menu

  Examples:
    |options        |
    |Home           |
    |about us       |
    |projects       |
    |city partners  |
    |alliances      |
    |we are hiring!  |

@projects @smartcity @qlue @clear @quit
Scenario: qlue - Projects Page 
  Given user is at home page
  When user click Projects menu
  Then user should display product "<products>" in Projects menu

  Examples:
    |products         |
    |Qlue x MyCity    |
    |QlueWork         |
    |QlueVision       |

@address @smartcity @qlue @clear @quit
Scenario: qlue - Home Page 
  Given user is at home page
  Then user should see address of qlue company