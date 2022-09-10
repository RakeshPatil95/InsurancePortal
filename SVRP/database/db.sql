-- create database
drop database if exists SVRP;
create database SVRP;

-- use database
use SVRP;

-- create table admin
drop table if exists admin;
create table admin(
    adminId int primary key auto_increment,
    firstName varchar(50) ,
    lastName varchar(50) ,
    phoneNumber bigint,
    email varchar(100) ,
    password varchar(100) ,
    securityQuestion varchar(100),
    securityAnswer varchar(100),
    image varchar(100) 
);

-- create table address
drop table if exists address;
create table address(
    pincode int primary key,
    village varchar(50) not null,
    city varchar(50) not null,
    state varchar(50) not null
);

-- create table agents
drop table if exists agents;
create table agents(
    agentId int  auto_increment,
    firstName varchar(50) ,
    lastName varchar(50) ,
    phoneNumber bigint ,
    email varchar(100) ,
    password varchar(100) ,
    securityQuestion varchar(100) ,
    securityAnswer varchar(100) ,
    image varchar(100),
    dateOfBirth date ,
    hireDate date ,
    adhar varchar(14),
    adharDoc varchar(100),
    pan varchar(14),
    panDoc varchar(100),
    pincode int ,
    primary key(agentId,pincode),
    foreign key (pincode) references address(pincode)
);

-- create table customer
drop table if exists customers;
create table customers(
     customerId int auto_increment,
    firstName varchar(50) ,
    lastName varchar(50) ,
    phoneNumber bigint ,
    email varchar(100) ,
    password varchar(100) ,
    securityQuestion varchar(100) ,
    securityAnswer varchar(100) ,
    image varchar(100),
    agentId int ,
    age int, 
    dateOfBirth date ,
    adhar varchar(14),
    adharDoc varchar(100),
    pan varchar(14),
    panDoc varchar(100),
    pincode int ,
    primary key(customerId)
   
);






-- create table policy
drop table if exists policy;
create table policy(
    policyId int primary key auto_increment,
    policyName varchar(50),
    minEntryAge smallint,
    maxEntryAge smallint,
    minPeriodmonths int,
    maxPeriodmonths int,
    minMonthPremium int,
    maxMonthPremium int,
    policyPdfPath varchar(50),
    agentsCommissionPercentage decimal(5,2),
    perAnnumRate decimal(5,2),
    policyImage varchar(100)
);

-- create table customersPolicy
drop table if exists customersPolicy;
create table customersPolicy(
    customerId int,
    policyId int,
    policyStartDate date,
    policyEndDate date,
    primiumDate date,
    primium int,
    invoice varchar(100),
    status boolean,
    claimAmount decimal(10,2),
    claimDate date,
    foreign key (customerId) references customers(customerId),
    foreign key (policyId) references policy(policyId)
);


-- create table policyTransactions
drop table if exists policyTransactions;
create table policyTransactions(
    transactionId int,
    customerId int,
    agentId int,
    policyId int,
    amount int,
    lateFee int ,
    paymentDate date,
    primary key(agentId,customerId,policyId,transactionId),
     foreign key (customerId) references customers(customerId),
     foreign key (agentId) references agents(agentId),
    foreign key (policyId) references policy(policyId)

);




Insert into customer(
    first_name,
    last_name ,
    phone_number ,
    email  ,
    password,
    age
) values ("Vinaya","Patil",952546785,"vinaya@gmail.com","Vinaya@123","24");