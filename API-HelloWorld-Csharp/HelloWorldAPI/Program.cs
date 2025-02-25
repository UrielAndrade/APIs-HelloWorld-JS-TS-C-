var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
//lembra o express;

//Criando uma rota GET;
app.MapGet("/", () => "Uriel Lhe deu um Hello World!");

//faz server rodar;
app.Run();