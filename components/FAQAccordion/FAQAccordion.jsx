import "react-accessible-accordion/dist/fancy-example.css";
import styles from "./FAQAccordion.module.scss";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

const FAQAccordion = () => {
  return (
    <div id="faq">
      <div>
        <div className={styles.topInfoFAQ}>
          <h2>Preguntas frecuentes</h2>
          <p>
            ¿Te quedó alguna duda? ¡No te preocupes! Tenemos las respuestas para
            tí en esta página.
          </p>
        </div>
        <Accordion
          allowZeroExpanded={true}
          className={styles.FAQAccordionContainer}
        >
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.FAQAccordionMainButton}>
                Mi tarjeta
                <Image
                  src="/icons/faq/tabArrow.svg"
                  alt="Abrir/cerrar tab"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-4 h-auto"
                />
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      ¿Cuánto cuesta mi tarjeta?
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      La membresía es gratis el primer año, es decir, tienes
                      bonificada la cuota de mantenimiento por 12 meses.
                      <br />
                      Tu tarjeta tiene una tasa de financiamiento del 20% anual.
                      <br />
                      <br />
                      Tarifas y comisiones
                      <br />
                      <br />
                      Membresía: Gratis el 1er año. / $50.00 a partir del 2 año.
                      <br /> Tasa de interés anual: 20%
                      <br /> Tiempo de financiamiento: 60 días Seguro contra
                      robo y fraude (mensual): $3,50
                      <br /> Seguro de vida (sobre saldo adeudado): $2.47 por
                      cada $1,000.00 de saldo adeudado o fracción.
                      <br /> Cargo por pago atrasado: 4% del saldo adeudado,
                      máximo $25.00
                      <br /> Comisión sobregiro: $20.00
                      <br />
                      Cargo por reposición (deteriorada): Gratis
                      <br /> Cargo por reposición (pérdida o robada): $15.00
                      <br /> Cargo por compra de saldo (Refinanciamiento):
                      $25.00
                      <br /> Cargo por investigación de reclamos: Gratis
                      <br />
                      <br />
                      ¿Cómo es la renovación anual?
                      <br />
                      <br />
                      Tu membresía es gratis por 1 año… y la renovación también
                      puede serlo. ¡Es muy simple!
                      <br />
                      Cuánto más uses tu Visa Crédito PedidosYa Pagos, sumas más
                      oportunidad para que tu membresía del 2do año también sea
                      gratis.
                      <br /> ¿Cómo sumar chances?
                      <br /> Cada mes debes consumir el equivalente al 20% de tu
                      límite o su acumulado anual.
                      <br /> Por ejemplo, si tienes un límite de $1.000 cada mes
                      tus consumos deben sumar $200 o el acumulado anual de tus
                      consumos deben ser de $2.400.
                      <br />
                      Ten en cuenta que si en algún momento del año tuviste
                      intereses por mora, no podrás disfrutar de este beneficio.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      Tarjeta física y tarjeta virtual
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Tu tarjeta de PedidosYa Pagos es una sola, pero tiene 2
                      modalidades de uso: virtual y física. <br />
                      La tarjeta virtual es para compras online dentro y fuera
                      de la app.
                      <br /> La tarjeta física es para compras en comercios
                      presenciales. <br />
                      Por otro lado, cada tarjeta tiene su propia medida de
                      seguridad para proteger tu dinero. <br />
                      En la tarjeta virtual, los datos están en la app y solo tú
                      puedes verlos. Están protegidos con el mismo método que
                      usas para desbloquear tu celular. <br />
                      La tarjeta física no tiene impreso ningún dato sensible y
                      sólo verás los últimos 6 dígitos.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      ¿Cómo uso mi tarjeta virtual?
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Con tu tarjeta virtual puedes comprar online dentro y
                      fuera de la app.
                      <br />
                      <br />
                      Compras en tiendas online
                      <br />
                      <br />
                      Para compras fuera de la app, necesitas el número, la
                      fecha de vencimiento y el código de seguridad (CVV) de tu
                      tarjeta.
                      <br /> Podrás ver los datos dentro de PedidosYa Pagos &gt;
                      Tarjeta PedidosYa Pagos. <br />
                      <br />
                      Compras en PedidosYa
                      <br />
                      <br />
                      Para compras dentro la app, la tarjeta de PedidosYa Pagos
                      ya está agregada como medio de pago.
                      <br /> Solo debes elegirla para pagar el pedido y obtener
                      tu cashback.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.FAQAccordionMainButton}>
                Envío y seguimiento
                <Image
                  src="/icons/faq/tabArrow.svg"
                  alt="Ir arriba"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-4 h-auto"
                />
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      ¿Cuándo llega mi tarjeta?
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      El envío de tu tarjeta lo realiza un servicio de
                      mensajería de Banesco (Panamá) S.A. La recibirás en la
                      dirección que completaste al momento de solicitarla.
                      <br /> El tiempo de entrega depende del área en la que
                      vivas:
                      <br /> Hasta 48 hs en el área metropolitana. <br />
                      Hasta 72 hs en interior. Si pasó este tiempo y no
                      recibiste tu tarjeta, puedes comunicarte con Banesco
                      (Panamá) S.A. al 800-1300.
                      <br /> Recuerda que puedes usar tu tarjeta virtual,
                      mientras te llega la física.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      ¿Puede recibirla otra persona?
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      No, solo tú puedes recibir tu tarjeta porque debes firmar
                      el acuse de recibo y otros documentos legales que la
                      acompañan. <br />
                      Ten a mano tu cédula de identidad al momento de la
                      entrega.
                      <br />
                      <br />
                      ¿Qué sucede si no estoy en mi domicilio?
                      <br />
                      <br />
                      Si no te encuentran, Banesco (Panamá) S.A. se comunicará
                      contigo por teléfono para coordinar una nueva visita.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      ¿Cómo activo mi tarjeta física?
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Activar tu tarjeta física es muy fácil. Solo tienes que
                      escanear el código QR que encontrarás en tu kit de
                      bienvenida. <br />
                      Podrás escanear el QR con tu cámara de celular o a través
                      de la app. <br />
                      <br />
                      Para activar tu tarjeta desde la app:
                      <br />
                      <br />
                      Entra en Menú &gt; PedidosYa Pagos &gt; Tarjeta PedidosYa
                      Pagos. <br />
                      Selecciona activar
                      <br /> Escanea el QR que llegó junto a tu tarjeta. <br />
                      ¡Listo! Ya puedes comprar en tus comercios favoritos.
                      <br />
                      Si tuviste algún inconveniente para activar tu tarjeta,
                      puedes hacerlo por teléfono llamando a Banesco (Panamá)
                      S.A. al 800-1300.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.FAQAccordionMainButton}>
                Beneficios
                <Image
                  src="/icons/faq/tabArrow.svg"
                  alt="Ir arriba"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-4 h-auto"
                />
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      ¿Qué son los cashback?
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Los cashback son reintegros de dinero que recibes por tus
                      compras diarias. <br />
                      <br />
                      ¿Cuánto puedo recibir de cashbacks?
                      <br />
                      <br />
                      El porcentaje varía según el tipo de comercio en el que
                      compres:
                      <br /> 7% en PedidosYa Market, el Super digital de
                      PedidosYa.
                      <br /> 3% en todos los comercios dentro de PedidosYa:
                      restaurantes, farmacias, envíos, etc.
                      <br /> 1% en tiendas de alimentos y bebidas fuera de
                      PedidosYa.
                      <br /> Puedes recibir hasta $10 de cashback por mes.
                      <br />
                      <br />
                      ¿Dónde lo recibo?
                      <br />
                      <br />
                      Verás acreditado el dinero de tu cashback en tu billetera
                      de PedidosYa Pagos.
                      <br /> Como son acumulativos y no se vencen, puedes usarlo
                      cuándo quieras dentro de PedidosYa.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.FAQAccordionMainButton}>
                Pagos y estados de cuenta
                <Image
                  src="/icons/faq/tabArrow.svg"
                  alt="Ir arriba"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-4 h-auto"
                />
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      ¿Cómo pago mi tarjeta?
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Tienes varios canales de pago porque tu tarjeta es emitida
                      por Banesco ( Panamá S.A)
                      <br />
                      <br />
                      ACH : Transferencia bancaria
                      <br /> Sucursal Banesco
                      <br /> ATM Full Banesco <br />
                      Débito automático <br />
                      <br />
                      Conoce qué datos necesitas para cada uno.
                      <br />
                      <br />
                      ACH
                      <br />
                      <br /> Realiza una transferencia bancaria desde cualquier
                      banco en Panamá.
                      <br /> Ten en cuenta que no puedes hacerlo desde una
                      cuenta Banesco porque la tarjeta es emitida por el mismo
                      banco.
                      <br />
                      ¿Qué datos necesitas?
                      <br /> Número de tarjeta: son los 16 dígitos de tu tarjeta
                      virtual.
                      <br /> Banco de destino: Banesco. <br />
                      Monto a pagar: pago mínimo o el saldo total adeudado al
                      corte.
                      <br />
                      <br />
                      Sucursal Banesco
                      <br />
                      <br />
                      Paga en efectivo o con cheque en la sucursal más cercana.{" "}
                      <br />
                      Ten en cuenta los tiempos de acreditación: <br />
                      Pagos en efectivo: inmediato.
                      <br /> Pagos con cheque Banesco: automático <br />
                      Pagos con cheque de otros bancos: hasta 72 hs.
                      <br /> ¿Qué datos necesitas?
                      <br /> Número de tarjeta: son los 16 dígitos de tu tarjeta
                      virtual.
                      <br />
                      Monto a pagar: pago mínimo o total.
                      <br />
                      <br />
                      ATM Full Banesco
                      <br />
                      <br />
                      Paga en efectivo en el ATM full más cercano.
                      <br /> La acreditación es inmediata. <br />
                      ¿Qué datos necesitas?
                      <br />
                      Número de tarjeta: son los 16 dígitos de tu tarjeta
                      virtual.
                      <br /> Monto a pagar: desde el pago mínimo hasta el saldo
                      total adeudado al corte. <br />
                      <br />
                      Débito automático
                      <br />
                      <br />
                      Afilia tu cuenta Banesco para automatizar el pago.
                      <br />
                      ¿Qué datos necesitas? Llamar al 800-1300.
                      <br /> Elegir la cuenta de la que quieres que se realice
                      el débito.
                      <br />
                      Indicar si quieres pagar el mínimo o el saldo total
                      adeudado al corte.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      Fecha de corte y de pago
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      La fecha de corte es el día en el que se genera tu estado
                      de cuenta a pagar. Incluye consumos del último período y
                      cuotas pendientes correspondientes a ese mes.
                      <br /> La fecha de pago es el último día en el que puedes
                      abonar tu estado de cuenta sin generar intereses por
                      financiamiento.
                      <br /> Tu fecha de corte es el día 16 de cada mes.
                      <br />
                      Tu fecha de pago es el día 12 del mes siguiente de la
                      fecha de corte. Si el día 12 es domingo o feriado, la
                      fecha de pago pasa al siguiente día hábil. <br />
                      Por ejemplo, si tu período finalizó el 16 de agosto, tu
                      último día pago sin intereses es el 12 de septiembre.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      ¿Cómo tener mi tarjeta al día?
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Para estar al día y seguir usando tus tarjetas, te
                      recomendamos abonar el pago mínimo cada mes.
                      <br /> Ten en cuenta que si abonas el mínimo, te quedará
                      un saldo pendiente que se sumará al próximo período y
                      sobre el cuál pagarás una tasa de financiamiento. <br />
                      <br />
                      ¿Qué sucede si no pago el mínimo?
                      <br />
                      <br />
                      Si pagas menos del mínimo o no lo pagas, al día siguiente
                      del próximo corte, tu tarjeta se bloqueará automáticamente
                      y no podrás usarla. <br />
                      Además tendrás que pagar un cargo por pago atrasado.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.FAQAccordionMainButton}>
                Tengo un problema
                <Image
                  src="/icons/faq/tabArrow.svg"
                  alt="Ir arriba"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-4 h-auto"
                />
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      No llegó mi tarjeta física
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      El tiempo de entrega de tu tarjeta depende del área en la
                      que vivas: <br />
                      Hasta 48 hs en el área metropolitana.
                      <br />
                      Hasta 72 hs en interior.
                      <br /> Sí luego de este tiempo no recibiste tu tarjeta,
                      puedes comunicarte con Banesco (Panamá) S.A. al 800-1300.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      No puedo activar mi tarjeta
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      En tu kit de bienvenida encontrarás un código QR que
                      puedes escanear con la cámara de tu celular o desde la app
                      ingresando a PedidosYa Pagos. <br />
                      Si perdiste el QR, tu celular no puede escanearlo o
                      tuviste algún otro inconveniente, puedes activarla por
                      teléfono llamando a Banesco (Panamá) S.A. al 800-1300.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      No recibí un cashback
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Ten en cuenta que puedes recibir hasta $10 de cashback por
                      mes. <br />
                      Si alcanzaste el tope mensual de $10, tus compras no
                      generarán cashbacks hasta el próximo mes.
                      <br />
                      En el caso de que te corresponda el cashback y no lo veas,
                      puedes contactarte con nosotros para que revisemos qué
                      pasó.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      Me robaron mi tarjeta física
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Si te robaron o perdiste la tarjeta física, puedes
                      solicitar el bloqueo por teléfono llamando a Banesco (
                      Panamá S.A) al 800-1300 o comunicándote por WhatsApp al
                      282-2662.
                      <br /> Recuerda que puedes seguir usando tu tarjeta
                      virtual, mientras te llega la reposición.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      Mi tarjeta física está dañada
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Si tu tarjeta se dañó o deterioró puedes solicitar la
                      reposición gratis llamando a Banesco ( Panamá S.A) al
                      800-1300.
                      <br /> Recuerda que puedes seguir usando tu tarjeta
                      virtual, mientras te llega la reposición.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      Me robaron el celular
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Si te robaron o perdiste tu celular puedes solicitar el
                      bloqueo de tu tarjeta virtual por teléfono llamando a
                      Banesco ( Panamá S.A) al 800-1300 o comunicándote por
                      WhatsApp al 282-2662. <br />
                      Ten en cuenta que tu tarjeta virtual está protegida por el
                      mismo método que usas para desbloquear tu celular y solo
                      tú puedes ver los datos. <br />
                      Recuerda que puedes seguir usando tu tarjeta física,
                      mientras generamos la nueva tarjeta virtual.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      No veo reflejado mi pago
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Los plazos de acreditación varían de acuerdo al canal de
                      pago que hayas utilizado. <br />
                      <br />
                      ACH
                      <br />
                      <br />
                      Si realizaste el pago por transferencia, es importante que
                      valides la fecha y hora de la transferencia. Ten en cuenta
                      que esta forma de pago tarda en acreditarse hasta 72 hs
                      hábiles. <br />
                      Si luego de ese plazo no ves reflejado el pago, debes
                      comunicarte con el banco emisor de la cuenta desde la que
                      realizaste la transferencia.
                      <br />
                      <br />
                      Sucursal Banesco
                      <br />
                      <br />
                      La acreditación depende el medio de pago:
                      <br /> Pagos en efectivo: inmediato. <br />
                      Pagos con cheque Banesco: automático.
                      <br /> Pagos con cheque de otros bancos: hasta 72 hs.
                      <br /> Pasado estos plazos, si no ves reflejado el pago
                      puedes reportarlo por teléfono llamando a Banesco ( Panamá
                      S.A) al 800-1300. <br />
                      <br />
                      ATM Full Banesco
                      <br />
                      <br />
                      La acreditación es inmediata.
                      <br /> Si no ves reflejado el pago puedes reportarlo por
                      teléfono llamando a Banesco ( Panamá S.A) al 800-1300.{" "}
                      <br />
                      <br />
                      Débito automático
                      <br />
                      <br />
                      Si optaste por realizar el pago por débito automático, es
                      importante que tu cuenta tenga dinero al día de corte de
                      tu tarjeta.
                      <br /> De lo contrario, no se podrá realizar el débito y
                      pasado el vencimiento, la falta de pago generará intereses
                      por mora. <br />
                      Si en tus movimientos ves el débito pero no aún así el
                      pago no está reflejado, puedes reportarlo por teléfono
                      llamando a Banesco ( Panamá S.A) al 800-1300.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      No reconozco una compra
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Si dentro de tus actividades ves alguna compra que no
                      realizaste, puedes reportarla por teléfono llamando a
                      Banesco ( Panamá S.A) al 800-1300 o comunicándote por
                      WhatsApp al 282-2662.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={styles.FAQAccordionInnerButton}
                    >
                      Quiero cancelar mi tarjeta
                      <Image
                        src="/icons/faq/tabArrow.svg"
                        alt="Ir arriba"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-4 h-auto"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Nos entristece escuchar esto, pero lo respetamos.
                      <br />
                      <br />
                      Para cancelar tu tarjeta es importante que estés al día
                      con tu pago y no quede ninguna deuda pendiente.
                      <br />
                      Podrás solicitar la cancelación de tu tarjeta por teléfono
                      llamando a Banesco ( Panamá S.A) al 800-1300 opción 2.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQAccordion;
